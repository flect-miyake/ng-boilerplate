var gulp    = require('gulp');

var configs = require('../config');


gulp.task('watch', ['build'], function() {
  gulp.watch([configs.htdocs.src], ['htdocs']);
  gulp.watch([configs.javascripts.src], ['javascripts']);
  gulp.watch([configs.templates.src], ['templates']);
  gulp.watch([configs.stylesheets.src], ['stylesheets']);
  gulp.watch([configs.fonts.src], ['fonts']);
  gulp.watch([configs.images.src], ['images']);
});
