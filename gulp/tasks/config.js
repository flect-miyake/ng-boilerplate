var gulp     = require('gulp');

var ngConfig = require('gulp-ng-config');

var config   = require('../config').config;


gulp.task('config:development', function() {
  return gulp.src(config.src)
    .pipe(ngConfig(config.moduleName, {
      environment: 'development'
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('config:production', function() {
  return gulp.src(config.src)
    .pipe(ngConfig(config.moduleName, {
      environment: 'production'
    }))
    .pipe(gulp.dest(config.dest));
});
