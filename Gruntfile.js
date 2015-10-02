module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'assets/scss/',
					src: ['style.scss'],
					dest: 'assets/css',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			combine: {
				files: {
					'public_html/assets/style.min.css': [
						"assets/css/normalize.min.css",
						"assets/css/slick.css",
						"assets/css/style.css",
					]
				}
			}
		},
		uglify: {
			js: {
				// options: {
				// 	mangle: false,
				// 	compress: false
				// },
				files: [{
					'public_html/assets/main.min.js': [
						'assets/js/lib/jquery.min.js',
						// 'assets/js/lib/skrollr.min.js',
						// 'assets/js/lib/jquery.waypoints.js',
						// 'assets/js/lib/slick.min.js',
						// 'assets/js/lib/skrollr.min.js',
						// 'assets/js/lib/jquery.smoothState.js',
						// 'assets/js/lib/js.cookie.js',
						'assets/js/*.js'
					]
				}, {
					'public_html/assets/modernizr.min.js': 'assets/js/lib/modernizr.js'
				}]

			}
		},

		watch: {
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'cssmin'] //
			},
			js: {
				files: 'assets/**/*.js',
				tasks: ['uglify']
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);
};