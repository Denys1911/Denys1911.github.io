const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      gulpStylelint = require('gulp-stylelint'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      del = require('del'),
      rename = require('gulp-rename');
    
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('html', () => {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scss', () => {
    return gulp.src('app/scss/**/*.scss')
    .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {formatter: 'string', console: true}
        ]
    }))
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(autoprefixer({
        overRideBrowsers: ['last 10 versions'],
        grid: true
    }))
    //.pipe(rename({suffix: '.min'}))  // if you want to minify your css, uncomment this line. This will just rename your main.css file into main.min.css
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', () => {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/swiper/dist/css/swiper.css'
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('app/scss'))
    .pipe(browserSync.reload({stream: true}))
});

/// *** STYLELINT AUTOFIX TASK *** ///
gulp.task('fix', () => {
    return gulp.src('app/scss/...') // here point your scss file( either css if you need) which you need to fix
    .pipe(gulpStylelint({
        failAfterError: false,  
        fix: true
    }))
    .pipe(gulp.dest('app/scss'))  // Destination of your fixed file. If you need to override old, just point destination in the same folder
});
/// *** STYLELINT AUTOFIX TASK *** ///

gulp.task('js', () => {
    return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js-libs', () => {
    return gulp.src([
        // put here destination of js files from plugins which are used on your project 
        'node_modules/swiper/dist/js/swiper.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/js/**/*.js', gulp.parallel('js'))
});

gulp.task('build', async () => {
    let buildHtml = gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'))
    let buildCss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
    let buildJs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    let buildImages = gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
    let buildHTML = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('del', async () => {
    del.sync('dist');
});

gulp.task('default', gulp.parallel('css-libs', 'scss', 'js-libs', 'browser-sync', 'watch'));