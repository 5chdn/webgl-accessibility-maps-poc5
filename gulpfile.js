/*jshint esversion: 6 */
/*jshint indent: 2 */

let gulp = require('gulp');
let gutil = require('gulp-util');
let jshint = require('gulp-jshint');
let sourcemaps = require('gulp-sourcemaps');

// gulp.task('default', ['watch'], function() {
//   return gutil.log("Gulp is running!");
// });
//
// gulp.task('publish', function() {
//   gulp.src('source/html/*.html').pipe(gulp.dest('example'));
//   gulp.src('source/script/*.js').pipe(gulp.dest('example'));
//   gulp.src('source/styke/*.css').pipe(gulp.dest('example'));
//   gulp.src('source/images/*.png').pipe(gulp.dest('example'));
// });
//
// gulp.task('jshint', function() {
//   return gulp.src('source/script/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'));
// });
//
// gulp.task('watch', function() {
//   gulp.watch('source/script/**/*.js', ['jshint']);
// });

gulp.task('build-js', function() {
  return gulp.src('source/script/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('example'));
});
