module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        browserifyOptions: {
          debug: true,
          standalone: 'easyui'
        }
      },
      build: {
        src: './index.js',
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
          'git commit -m "' + grunt.option('git_commit_message') + '"',
          'git push'
        ].join('&&')
      }
    },
    watch: {
      files: './lib/**/*.js',
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
    grunt.task.run('browserify');

    grunt.task.run('bumpup:' + (grunt.option('bumpup_type') || 'patch'));

    grunt.task.run('shell:git')
  });
};
