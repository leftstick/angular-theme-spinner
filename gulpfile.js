 'use strict';

 var gulp = require('gulp');

 var less = function(dest, isProduction) {
     var less = require('gulp-less');
     var LessPluginAutoPrefix = require('less-plugin-autoprefix');
     var autoprefix = new LessPluginAutoPrefix({
         browsers: ['last 5 versions']
     });

     var LessPluginCleanCSS = require('less-plugin-clean-css');
     var cleancss = new LessPluginCleanCSS();

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

 var copy = function(isProduction) {
     var minify = require('html-minifier').minify;
     var html = require('fs').readFileSync('src/angular-theme-spinner.html', {
         encoding: 'utf8'
     });
     var minHtml = minify(html, {
         removeComments: true,
         removeCommentsFromCDATA: true,
         collapseWhitespace: true
     });

     var template = require('gulp-template');
     var rename = require('gulp-rename');
     return gulp.src('src/angular-theme-spinner.js_vm')
         .pipe(template({
             template: minHtml.replace(/\'/g, '\\\'')
         }))
         .pipe(rename({
             extname: '.js'
         }))
         .pipe(gulp.dest(isProduction ? 'dist/' : 'demo/'));
 };

 gulp.task('copyDemo', function() {
     return copy(false);
 });

 gulp.task('copyDist', function() {
     return copy(true);
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
