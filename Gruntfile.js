module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngtemplates:  {
      Split:        {
        cwd:      'application/app',
        src:      'partials/**.html',
        dest:     'application/_public/templates.js'
      }
    },
    nodewebkit: {
      options: {
        // version: "0.9.1",
        build_dir: './dist',
        // specifiy what to build
        mac: true,
        win: false,
        // linux32: true,
        linux64: true,
        keep_nw: true
      },
      src: [
        './application/**/*'
      ]
    },
    watch: {
      templates: {
        files: ['application/app/partials/*.html'],
        tasks: ['ngtemplates']
      },
    },
  });

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['ngtemplates', 'nodewebkit']);
};
