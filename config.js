module.exports = {
  dev: {
    sass: ['app/assets/scss/**/*.scss', 'app/assets/scss/*.scss'],
    css: 'app/assets/css',
    js: 'app/*.js'
  },
  build: {
    root: 'build',
    css: 'build/css',
    js: 'build/js',
    images: 'build/images',
    fonts: 'build/fonts'
  }
};
