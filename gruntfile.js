module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'main.css': 'main.sass'
				}
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dist: 'images/build/'
				}]
			}
		}


	});
	// Load the plugins tasks 
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s).

	grunt.registerTask('default', ['sass', 'imagemin']);
};