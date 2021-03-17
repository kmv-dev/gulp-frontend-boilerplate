const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function liveReload() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
}


function styles() {
    return src('src/scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['src/scss/**/*.scss'], styles)
    watch(['src/*.html']).on('change', browserSync.reload)
}

exports.styles = styles;
exports.watching = watching;
exports.liveReload = liveReload;
