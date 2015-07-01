module.exports = function(grunt) {
	/* Grunt Tasks Conguration */
	grunt.initConfig({
		serve: {
	        options: {
	            port: 9000
	        },
	        tasks: ['watch']
    	},
		watch: {
		  scripts: {
		    files: ['js/*.js', 'css/*.css'],
		    tasks: ['default'],
		    options: {
		      spawn: false
		    }
		  }
		},
		concat: {
			lib: {
			  src: ['js/roombar-app.js'],
			  dest: 'dist/js/roombar.js'
			},
			style: {
			  src: ['css/roombar-base.css', 'css/roombar-desktop.css', 'css/roombar-mobile.css'],
			  dest: 'dist/css/roombar.css'
			}
		}
	});

	/* Register Grunt Tasks */
	grunt.registerTask('speak', function(){
		console.log('I speak');
	});

	grunt.registerTask('build', function(){
		console.log('I build');
	});

	grunt.registerTask('scream', function(){
		console.log('I scream');
	});

	grunt.registerTask('default', ['build', 'speak', 'scream']);

	/* Load Grunt Tasks */
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-serve');
}