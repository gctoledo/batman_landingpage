const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const strip = require('gulp-strip-comments');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function removeComments() {
    return gulp.src('./comments/scripts/*.js')
    .pipe(strip())
    .pipe(gulp.dest('./src/scripts'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.removeComments = removeComments;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}