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
    watch: {
      files: './lib/*.js',
      tasks: 'browserify'
    },
    shell: {
      git: {
        command: [
          'git add . --all',
          'git commit -m "' + grunt.option('commit_message') + '"',
          'git push'
        ].join('&&')
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);
  grunt.registerTask('git', ['browserify', 'shell:git']);
};
