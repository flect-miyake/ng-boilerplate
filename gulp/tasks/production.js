var gulp        = require('gulp');

var uglify      = require('gulp-uglify');
var ngAnnotate  = require('gulp-ng-annotate');
var minifyCss   = require('gulp-minify-css');
var size        = require('gulp-filesize');
var runSequence = require('run-sequence');

var configs     = require('../config');


gulp.task('production', function() {

  runSequence(
    'build',
    'config:production',
    function() {
      // uglify javascripts
      gulp.src(configs.javascripts.dest + '/' + configs.javascripts.outputName)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(configs.javascripts.dest))
        .pipe(size());

      // minify css
      gulp.src(configs.stylesheets.dest + '/**/*.css')
        .pipe(minifyCss(configs._minifyCss.options))
        .pipe(gulp.dest(configs.stylesheets.dest))
        .pipe(size());
    }
  );

});
