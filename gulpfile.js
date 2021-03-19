const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
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
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream())
}

function images() {
    return src('src/assets/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/assets/'))
}

function scripts() {
    return src('src/js/main.js')
        .pipe(rename({ extname: '.min.js'}))
        .pipe(uglify())
        .pipe(dest('src/js'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['src/scss/**/*.scss'], styles);
    watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts);
    watch(['src/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
    return del('dist')
}

function build() {
    return src([
        'src/css/style.min.css',
        'src/js/main.min.js',
        'src/*.html',
        'src/assets/**/*'
    ], {base: 'src'})
        .pipe(dest('dist'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.liveReload = liveReload;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, build, images);


exports.default = parallel(styles, scripts ,liveReload, watching);
