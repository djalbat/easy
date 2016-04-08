module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: "inline",
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: './libES2015/',
          src: ['**/*.js'],
          dest: './lib/'
        }]
      }
    },
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: 'easyui'
          }
        },
        src: ['./index.js'],
        dest: './dist/easyui.js'
      }
    },
    bumpup: {
      file: 'package.json'
    },
    shell: {
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
        './libES2015/**/*.js',
        './index.js'
      ],
      tasks: ['babel', 'browserify']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['babel', 'browserify']);
  grunt.registerTask('w', ['babel', 'browserify', 'watch']);
  grunt.registerTask('g', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('babel');
    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + type);
    grunt.task.run('shell:git');
  });
};
