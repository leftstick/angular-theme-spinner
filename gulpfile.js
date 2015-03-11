 'use strict';

 var gulp = require('gulp');

 var less = function(dest, isProduction) {
     var less = require('gulp-less');
     var LessPluginAutoPrefix = require('less-plugin-autoprefix');
     var autoprefix = new LessPluginAutoPrefix({
         browsers: ['last 5 versions']
     });

     var LessPluginCleanCSS = require('less-plugin-clean-css');
     var cleancss = new LessPluginCleanCSS({
         advanced: true
     });

     var sourcemaps = require('gulp-sourcemaps');
     var rename = require('gulp-rename');

     return gulp.src('src/angular-theme-spinner.less')
         .pipe(rename({
             extname: '.min.css'
         }))
         .pipe(less({
             plugins: [autoprefix, cleancss]
         }))
         .pipe(gulp.dest(isProduction ? 'dist/' : 'demo/'));
 };

 gulp.task('lessDemo', function() {
     return less('demo/', false);
 });

 gulp.task('lessDist', function() {
     return less('./', true);
 });

 gulp.task('copyDemo', function() {
     return gulp.src('src/angular-theme-spinner.js')
         .pipe(gulp.dest('demo/'));
 });

 gulp.task('copyDist', function() {
     return gulp.src('src/angular-theme-spinner.js')
         .pipe(gulp.dest('dist'));
 });

 gulp.task('demo', ['lessDemo', 'copyDemo'], function() {
     var webserver = require('gulp-webserver');
     gulp.src('demo/')
         .pipe(webserver({
             host: '0.0.0.0',
             port: 8080,
             livereload: true,
             directoryListing: false,
             fallback: 'index.html'
         }));
 });


 gulp.task('dist', ['lessDist', 'copyDist'], function() {
     var uglify = require('gulp-uglify');
     var sourcemaps = require('gulp-sourcemaps');
     var rename = require('gulp-rename');

     return gulp.src('./dist/angular-theme-spinner.js')
         .pipe(rename({
             extname: '.min.js'
         }))
         .pipe(sourcemaps.init())
         .pipe(uglify())
         .pipe(sourcemaps.write('./', {
             sourceRoot: '.'
         }))
         .pipe(gulp.dest('./dist/'));
 });
