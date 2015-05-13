// Generated on 2014-06-24 using generator-angular 0.9.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    name: grunt.file.readJSON('package.json').name || grunt.file.readJSON('bower.json').name,
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      scripts: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.{js,coffee}'],
        tasks: [
          'newer:jshint:all',
          'newer:jscs:all',
          'clean:scripts',
          'coffee',
          'concat',
          'ngAnnotate'
        ]
      },
      scriptsTest: {
        files: ['test/spec/{,*/}*.{js,coffee}'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      scripts: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/js'
          ]
        }]
      },
      test: '.tmp'
    },

    coffee: {
      dist: {
        expand: true,
        flatten: true,
        cwd: '<%= yeoman.app %>/scripts',
        src: '**/*.coffee',
        dest: '.tmp/',
        ext: '.js'
      }
    },

    concat: {
      dist: {
        src: [
          '<%= yeoman.app %>/scripts/app.js',
          '<%= coffee.dist.dest %>/*js'
        ],
        dest: '.tmp/concat/<%= yeoman.name %>.js'
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },

    // ngAnnotate tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngAnnotate: {
      dist: {
        src: '.tmp/concat/<%= yeoman.name %>.js',
        dest: 'dist/js/<%= yeoman.name %>.js'
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('serve', [
    'wiredep',
    'build',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:test',
    'wiredep',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'coffee',
    'concat',
    'ngAnnotate'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
