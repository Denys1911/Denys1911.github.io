const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

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

gulp.task('concat-and-minify-css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'app/css/style.css',
    ])
        .pipe(concat('main.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('concat-and-minify-js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'app/js/Owner.js',
        'app/js/Car.js',
        'app/js/Person.js',
        'app/js/Company.js',
        'app/js/data.js',
        'app/js/additional-functions.js',
        'app/js/prepare-data.js',
        'app/js/control-clicks-on-main-block.js',
        'app/js/create-items-forms-and-lists.js',
        'app/js/control-vision-of-blocks.js',
        'app/js/app.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe((gulp.dest('app/js/')))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch(['app/css/*.css', '!app/css/main.min.css'], gulp.parallel('concat-and-minify-css'));
    gulp.watch(['app/js/*.js', '!app/js/main.min.js'], gulp.parallel('concat-and-minify-js'));
});

gulp.task('default', gulp.parallel('concat-and-minify-css', 'concat-and-minify-js', 'browser-sync', 'watch'));