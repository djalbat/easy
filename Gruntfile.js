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
          transform: [[
            'babelify',
            {
              presets: [
                'es2015'
              ]
            }
          ]]
        },
        src: ['./index.js'],
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
    watch: {
      files: [
        './es6/**/*.js'
      ],
      tasks: ['browserify']
    }
  });

  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['devUpdate', 'browserify']);
  grunt.registerTask('w', ['devUpdate', 'browserify', 'watch']);
  grunt.registerTask('v', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('bumpup:' + type);
  });
};
