module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
              options: {
                sassDir: './app/scss',
                cssDir: './app/css',
                fontsDir: './app/fonts'
              }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'app/js/*.js', '!app/js/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true,
                    angular: false
                }
            }
        },
        watch: {
            sass: {
              files: ['app/scss/*.scss'],
              tasks: ['compass'],
              options: { livereload: false, spawn:false },
            },
            css: {
              options: { livereload: true, spawn:false },
              files: ['app/css/*.css']
            },
            js: {
              files: ['app/js/*.js'],
              tasks: ['jshint'],
              options: {
                livereload: true
              }
            },
            html: {
                files: ['app/partials/*.html'],
                options: {
                  livereload: true
                },
            }
          },
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'compass']);

};