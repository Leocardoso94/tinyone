const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const sass = require('gulp-sass')



gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.scss','app.assets'])

gulp.task('app.html', function () {
    gulp.src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
})

gulp.task('app.scss', function() {
    gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.css', function () {
    gulp.src('app/**/*.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', function () {
    gulp.src('app/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', function () {
    gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public/assets'))
})

gulp.task('server', ['watch'], function () {
    gulp.src('public').pipe(webserver({
        livereload: true,
        port: 4000,
        open: true
    }))
})


gulp.task('watch', function () {
    watch('app/**/*.html', () => gulp.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('app/**/*.scss', () => gulp.start('app.scss'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('default', function () {
  gulp.start('app', 'server')    
})