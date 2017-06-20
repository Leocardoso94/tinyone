const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const sass = require('gulp-sass')



gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.scss','app.img', 'app.fonts'])

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
    .pipe(gulp.dest('public/css'))
})

gulp.task('app.css', function () {
    gulp.src('app/**/*.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/css'))
})

gulp.task('app.fonts', function () {
    gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('public/font-awesome/'))
})

gulp.task('app.js', function () {
    gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('app.img', function () {
    gulp.src('app/img/*.*')
    .pipe(gulp.dest('public/img'))
})

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function () {
    gulp.src([
        ''
        ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/deps/js'))
})

gulp.task('deps.css', function () {
    gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
        ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/deps/css'))
})

gulp.task('deps.fonts', function () {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*'
        ])
    .pipe(gulp.dest('public/deps/fonts'))
})

gulp.task('server', ['watch'], function () {
    gulp.src('public').pipe(webserver({
        livereload: true,
        port: 4000,
        open: true
    }))
})


gulp.task('watch', function () {
    watch('app/*.html', () => gulp.start('app.html'))
    watch('app/css/*.css', () => gulp.start('app.css'))
    watch('app/js/*.js', () => gulp.start('app.js'))
    watch('app/css/*.scss', () => gulp.start('app.scss'))
    watch('app/img/*.*', () => gulp.start('app.img'))
})

gulp.task('default', function () {
  gulp.start('app', 'server', 'deps')    
})