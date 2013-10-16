module.exports = function(grunt) {

  var _  = require('underscore');

  // set up grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['MarkShow/.assets/**.less'],
        tasks: 'css'
      }
    },

    less: {
      production: {
        options:{
          dumpLineNumbers:"comments"
        },
        files: {
          "MarkShow/.assets/style/markshow.css": "MarkShow/.assets/style/markshow.less"
        }
      }
    },

    cssmin: {
      css: {
        src: 'MarkShow/.assets/style/markshow.css',
        dest: 'MarkShow/.assets/style/markshow.min.css'
      }
    },

    copy: {
      bs_images: {
        files: [
          {
            expand: true,
            src: [ '**' ],
            cwd: 'MarkShow/.assets/libs/bootstrap/img',
            dest: 'MarkShow/.assets/img'
          }
        ]
      },
      bs_scripts: {
        files: [
          {
            expand: true,
            src: [ '**' ],
            cwd: 'MarkShow/.assets/libs/bootstrap/js',
            dest: 'MarkShow/.assets/js'
          }
        ]
      }
    },

    concat: {
      js: {
        src: [
          'MarkShow/.assets/libs/jquery/jquery.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-transition.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-alert.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-button.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-carousel.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-collapse.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-dropdown.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-modal.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-tooltip.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-popover.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-scrollspy.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-tab.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-typeahead.js',
          'MarkShow/.assets/libs/bootstrap/js/bootstrap-affix.js'
        ],
        dest: 'MarkShow/.assets/js/main.js',
      },
    },

    uglify: {
      js: {
        files: {
          'MarkShow/.assets/js/main.min.js': ['MarkShow/.assets/js/main.js']
        }
      }
    }

  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register grunt tasks
  grunt.registerTask('css', ['less', 'cssmin', 'copy:bs_images']);
  grunt.registerTask('build', ['css', 'concat:js', 'uglify']);
  grunt.registerTask('default', ['build']);

};
