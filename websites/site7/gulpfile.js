const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
const rename = require('gulp-rename');
    
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('html', () => {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scss', () => {
    return gulp.src('app/scss/**/*.scss')
    .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {formatter: 'string', console: true}
        ]
    }))
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        grid: true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('css-libs', () => {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/@glidejs/glide/dist/css/glide.core.css',
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('app/scss/vendors'))
    .pipe(browserSync.reload({stream: true}));
});

/// *** STYLELINT AUTOFIX TASK *** ///
gulp.task('fix', () => {
    return gulp.src('app/scss/main.scss') // here point your scss file( either css if you need) which you need to fix
    .pipe(gulpStylelint({
        failAfterError: false,  
        fix: true
    }))
    .pipe(gulp.dest('app/scss')); // Destination of your fixed file. If you need to override old, just point
    // destination in the same folder
});
/// *** STYLELINT AUTOFIX TASK *** ///

gulp.task('js', () => {
    return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-libs', () => {
    return gulp.src([
        'node_modules/@glidejs/glide/dist/glide.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/js/**/*.js', gulp.parallel('js'));
});

gulp.task('build', async () => {
    gulp.src('app/**/*.html').pipe(gulp.dest('dist'));
    gulp.src('app/css/**/*.css').pipe(gulp.dest('dist/css'));
    gulp.src('app/js/**/*.js').pipe(gulp.dest('dist/js'));
    gulp.src('app/images/**/*.*').pipe(gulp.dest('dist/images'));
    gulp.src('app/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('del', async () => {
    del.sync('dist');
});

gulp.task('default', gulp.parallel('css-libs', 'scss', 'js-libs', 'browser-sync', 'watch'));