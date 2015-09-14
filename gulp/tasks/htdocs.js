var gulp = require('gulp');

var config = require('../config').htdocs;


gulp.task('htdocs', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
