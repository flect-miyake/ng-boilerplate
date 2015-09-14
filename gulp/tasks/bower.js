var gulp    = require('gulp');

var bower   = require('gulp-bower');
var del     = require('del');

var config = require('../config')._bower;

gulp.task('bower:clean', function() {
  del.sync(config.dest);
});

gulp.task('bower', ['bower:clean'], function() {
  return bower()
    .pipe(gulp.dest(config.dest));
});
