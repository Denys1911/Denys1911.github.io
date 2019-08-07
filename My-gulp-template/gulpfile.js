const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      gulpStylelint = require('gulp-stylelint'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');
    
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
        overRideBrowsers: ['last 2 versions'],
        cascade: false,
        grid: true
    }))
    .pipe(gulp.dest('app/css'))
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

gulp.task('libs', () => {
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

gulp.task('default', gulp.parallel('scss', 'libs', 'browser-sync', 'watch'));