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
          cwd: './es6/',
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
            standalone: 'easyUI'
          }
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

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['devUpdate', 'babel', 'browserify']);
  grunt.registerTask('w', ['devUpdate', 'babel', 'browserify', 'watch']);
  grunt.registerTask('v', function() {
    var type = grunt.option('type');

    grunt.task.run('bumpup:' + type);
  });
};
