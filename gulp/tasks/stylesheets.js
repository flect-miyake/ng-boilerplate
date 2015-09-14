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
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerConfig.options))
    .pipe(gulp.dest(config.dest));
});
