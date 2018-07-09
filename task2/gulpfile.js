var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

var buildDerectory = 'build/';

gulp.task('style', function () {
    gulp.src('assets/styles/main.styl')
    .pipe(stylus().on('error', console.error.bind(console)))
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

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './' + buildDerectory
        }
    });

    gulp.watch("assets/**/*.*").on('change', browserSync.reload);

    gulp.watch('assets/images/*', ['copy:images']);
    gulp.watch('assets/index.html', ['copy:index']);
    gulp.watch('assets/js/*.js', ['copy:js']);
    gulp.watch('assets/styles/**/*.styl', ['style']);
});

gulp.task('default', ['serve']);

