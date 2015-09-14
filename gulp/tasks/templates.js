var gulp = require('gulp');

var ngTemplateCache = require('gulp-angular-templatecache');

var config = require('../config').templates;


gulp.task('templates', function() {
  return gulp.src(config.src)
    .pipe(ngTemplateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.dest));
});
