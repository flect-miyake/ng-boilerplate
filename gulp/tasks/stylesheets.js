var gulp               = require('gulp');

var handleErrors       = require('../util/handleErrors');

var sass               = require('gulp-sass');
var sourcemaps         = require('gulp-sourcemaps');
var autoprefixer       = require('gulp-autoprefixer');

var config             = require('../config').stylesheets;
var sassConfig         = require('../config')._sass;
var autoprefixerConfig = require('../config')._autoprefixer;


gulp.task('stylesheets', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig.options))
    .pipe(sourcemaps.write({
      includeContent: false,
      sourceRoot: '.'
    }))
    .on('error', handleErrors)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(autoprefixerConfig.options))
    .pipe(sourcemaps.write({
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest(config.dest));
});
