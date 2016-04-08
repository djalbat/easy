module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [['babelify', {presets: ['es2015']}]],
          browserifyOptions: {
            debug: true,
            standalone: 'easyui'
          }
        },
        src: ['./index.js'],
        dest: 'dist/easyui.js'
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
        './lib/**/*.js',
        './index.js'
      ],
      tasks: 'browserify'
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['browserify']);
  grunt.registerTask('w', ['browserify', 'watch']);
  grunt.registerTask('g', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + type);
    grunt.task.run('shell:git')
  });
};
