let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    gulpStylelint = require('gulp-stylelint'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {formatter: 'string', console: true}
        ]
    }))
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(autoprefixer({
        grid:true,
        overrideBrowserslist: ['last 10 versions'],
    }))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('script', function(){
    return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/swiper/dist/js/swiper.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/**/*.js', gulp.parallel('script'))
})

gulp.task('default', gulp.parallel('scss', 'libs', 'browser-sync', 'watch'))