var gulp = require('gulp');
var stylus = require('gulp-stylus');

var buildDerectory = 'build/';

gulp.task('style', function () {
    gulp.src('assets/styles/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest(buildDerectory + 'css'));
});

gulp.task('copy:index', function() {
    gulp.src('assets/index.html')
    .pipe(gulp.dest(buildDerectory));
});

gulp.task('copy:images', function() {
    gulp.src('assets/images/*')
    .pipe(gulp.dest(buildDerectory + 'images'));
});

gulp.task('copy:js', function() {
    gulp.src('assets/js/*')
    .pipe(gulp.dest(buildDerectory + 'js'));
});

gulp.task('watch:style', function () {
    gulp.watch('assets/styles/**/*.styl', ['style']);
});

gulp.task('watch:js', function () {
    gulp.watch('assets/js/*.js', ['copy:js']);
});

gulp.task('watch:index', function () {
    gulp.watch('assets/index.html', ['copy:index']);
});
gulp.task('watch:images', function () {
    gulp.watch('assets/images/*', ['copy:images']);
});

gulp.task('default', ['watch:style', 'watch:index', 'watch:images', 'watch:js']);
