
var autoprefixer = require('gulp-autoprefixer')
var minify = require('gulp-clean-css')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var gulp = require('gulp')

// plugin options
var options = {

  input: './scss/elementary.scss',

  output: './dist',

  autoprefixer: {
    // cascade: false,
    browsers: ['last 2 versions', '> 1%']
  },

  sass: {
    // an option to minify to output directly
    // outputStyle: 'compressed'
  },

  minify: {

  },

  rename: {
    suffix: '.min'
  }

}

// build task
gulp.task('build', function build () {
  gulp
    // load the input files
    .src(options.input)

    // compile the sources to css
    .pipe(sass(options.sass))

    // parse add vendor prefixes to css
    .pipe(autoprefixer(options.autoprefixer))

    // output the normal version
    .pipe(gulp.dest(options.output))

    // minify the normal version
    .pipe(minify(options.minify))

    // rename the destination filename
    .pipe(rename(options.rename))

    // output the minified version
    .pipe(gulp.dest(options.output))
})

// watch task
gulp.task('watch', function watch () {
  return gulp.watch(options.output, ['build'])
})

// default task
gulp.task('default', ['build'])
