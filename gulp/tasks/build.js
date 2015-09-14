var gulp        = require('gulp');

var runSequence = require('run-sequence');


gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['htdocs', 'javascripts', 'templates', 'stylesheets', 'images', 'fonts', 'bower', 'config:development'],
    callback
  );
});
