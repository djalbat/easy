module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: 'easyUI'
          },
          transform: [['babelify', { 'presets': ['es2015'] }]]
        },
        src: ['./lib/index.js'],
        dest: './dist/easyui.js'
      }
    },
    bumpup: {
      file: 'package.json'
    },
    devUpdate: {
      main: {
        options: {
          updateType: 'force',
          reportUpdated: true,
          semver: true,
          packages: {
            dependencies: true,
            devDependencies: true
          }
        }
      }
    },
    shell: {
      copy: {
        command: [
          'cp ./dist/easyui.js ./index.js'
        ].join('&&')
      },
      git: {
        command: [
          'git add . --all',
          'git commit -m "' + grunt.option('commit_message') + '"',
          'git push'
        ].join('&&')
      }
    },
    watch: {
      files: [
        './lib/**/*.js'
      ],
      tasks: ['browserify']
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['devUpdate', 'browserify']);
  grunt.registerTask('w', ['devUpdate', 'browserify', 'watch']);
  grunt.registerTask('g', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('devUpdate');
    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + type);
    grunt.task.run('shell:copy');
    grunt.task.run('shell:git');
  });
};
