const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const del = require('del');
const babel = require('gulp-babel');

gulp.task('lint:js', () => {
    gulp
        .src(['public/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('copy', () => {
    gulp
        .src('./public/assets/**')
        .pipe(
            gulp.dest('build/assets')
        );
    gulp
        .src('./public/css/**')
        .pipe(
            gulp.dest('build/css')
        );
    gulp
        .src('./public/*.html')
        .pipe(
            gulp.dest('build')
        );
});

gulp.task('clean', () => {
    return del('build')
});

gulp.task('compile:js', () => {
    gulp.src("public/**/*.js")
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(
            uglify()
        )
        .pipe(
            gulp.dest('build')
        )
});

gulp.task('compile', ['compile:js']);
gulp.task('lint', ['lint:js']);
gulp.task('build', gulpsync.sync(['clean', 'copy', 'lint', 'compile']));
