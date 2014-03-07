var gulp = require('gulp');

//plugins
var sass   = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var appResourcePath = 'web-ui/src/main/resources/app/'

// lint js
gulp.task('lint', function() {
    return gulp.src(appResourcePath + 'javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// scss
gulp.task('sass', function() {
    return gulp.src(appResourcePath + 'stylesheets/scss/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest(appResourcePath + 'stylesheets'));
});

// concat vendor scripts
// TODO: decide if we actually want to do this
//gulp.task('js-vendor-package', function() {
//    return gulp.src(appResourcePath + 'javascripts/vendor/*.js')
//        .pipe(concat('loyal3.vendor.min.js'))
//        .pipe(gulp.dest(appResourcePath + 'javascripts'));
//});

// minify
gulp.task('minify', function() {
    return gulp.src(appResourcePath + 'javascripts/*.js')
        .pipe(concat('loyal3.js'))
        .pipe(gulp.dest(appResourcePath + 'javascripts'))
        .pipe(rename('loyal3.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(appResourcePath + 'javascripts'));
});

// watch
gulp.task('watch', function() {
    gulp.watch(appResourcePath + 'javascripts/*.js', ['lint', 'minify']);
    gulp.watch(appResourcePath + 'stylesheets/scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'js-vendor-package', 'minify', 'watch']);