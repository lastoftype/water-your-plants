var path        = require('path');
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var watch       = require('gulp-watch');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var babel       = require('gulp-babel');
var webpack     = require('gulp-webpack');
var gutil       = require('gulp-util');
var uglify      = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var WebpackDevServer = require('webpack-dev-server');
var config      = require('./config.js');
var webpackConfig = require('./webpack.config.js')

// sass
gulp.task('sass', function() {
  return gulp.src('app/assets/scss/style.scss')
    .pipe(plumber())
    .pipe(sass({
      paths: [path.join(__dirname, 'scss', 'includes')]
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.build.css))
    .on('error', gutil.log);
});

// es6
gulp.task('scripts', function() {
  return gulp.src(config.dev.js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.build.js));
});

// watch
gulp.task('watch', function() {
  gulp.watch(config.dev.sass, ['sass']);
  gulp.watch(config.dev.js, ['scripts']);
});

// default
gulp.task('default', ['sass', 'watch', 'scripts']);
