/*
 * grunt-PumpVersion
 * https://github.com/cc/PumpVersion
 *
 * Copyright (c) 2015 Frank Cheng
 * Licensed under the MIT license.
 */

'use strict';

var lib = require('./lib');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('PumpVersion', 'The best Grunt plugin ever.', function() {
      lib.run('package.json', 'addHotfix');
  });

};
