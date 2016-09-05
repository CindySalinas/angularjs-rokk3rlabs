
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten'),
    connect = require('gulp-connect');

//clean
gulp.task('clean-folder', function() {
  return gulp.src('./dist/', {read: false})
    .pipe(clean());
});
// Views task
gulp.task('views', function() {
  // Get our index.html and put it in the dist folder
  gulp.src('index.html')
    .pipe(gulp.dest('dist/'));
  // Any other view files from app, will be put in the dist/views folder
  return gulp.src('./app/**/**/*.html')
    .pipe(flatten({ includeParents: -1} ))
    .pipe(gulp.dest('dist/views/'))
    .pipe(connect.reload());
});
//Components
gulp.task('components', function() {
  // Get components and put it in the dist folder
  return gulp.src('bower_components/**/**/*')
    .pipe(gulp.dest('dist/components'));
});
//server
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['./dist']
  });
});
//watch
gulp.task('watch', function() {
  //watch html
  gulp.watch(['./index.html', './app/**/**/*.html'], ['views']);
  //watch css
  gulp.watch(['./app/**/**/*.styl'], ['style']);
  //watch js
  gulp.watch(['./app/**/**/*.js'], ['scripts']);
});
//stylus
gulp.task('style', function() {
  return gulp.src('./app/app.styl')
    .pipe(stylus({
      compress: true,
      use: [ nib() ]
    }))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(connect.reload());
});
//js
gulp.task('scripts', function() {
  return gulp.src('./app/**/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});
//run
gulp.task('default', ['clean-folder'], function() {
  //start tasks
  gulp.start(['components', 'views', 'style', 'scripts', 'webserver', 'watch']);
});
