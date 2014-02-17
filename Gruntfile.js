module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngtemplates:  {
      myApp:        {
        cwd:      'app',
        src:      'partials/**.html',
        dest:     '_public/templates.js'
      }
    }
  });



  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['ngtemplates']);
};
