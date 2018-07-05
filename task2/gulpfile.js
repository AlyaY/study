var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', function() {
    return gulp.src('assets/styles/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('build/css'));
});