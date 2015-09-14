var gulp         = require('gulp');

var handleErrors = require('../util/handleErrors');

var concat       = require('gulp-concat');
var babel        = require('gulp-babel');

var config       = require('../config').javascripts;


gulp.task('javascripts', function() {
  return gulp.src(config.src)
    .pipe(concat(config.outputName))
    .pipe(babel({
      sourceMaps: true
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
