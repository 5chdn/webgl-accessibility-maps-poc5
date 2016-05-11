/*jshint esversion: 6 */
/*jshint indent: 2 */

let gulp = require('gulp');
let gutil = require('gulp-util');

gulp.task('default', function() {
  return gutil.log("Gulp is running!");
});
