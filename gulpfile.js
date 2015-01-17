var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('coffee', function() {

  var coffeeStream = coffee({ bare: true })
    .on('error', gutil.log);

  gulp.src('./lib/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffeeStream)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./lib/'));

});
