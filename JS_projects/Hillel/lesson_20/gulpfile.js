const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

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

gulp.task('css', () => {
    return gulp.src('app/css/style.css')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('concat-and-minify-js', () => {
    return gulp.src([
        'app/js/constructors/Task.js',
        'app/js/main/prepare-data.js',
        'app/js/additional/additional-functions.js',
        'app/js/main/create-tasks.js',
        'app/js/main/control-tasks.js',
        'app/js/main/control-modal-window-action.js',
        'app/js/main/control-modal-form-confirmation.js',
        'app/js/main/handle-click-on-todo-list.js',
        'app/js/main/app.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(uglify())
        .pipe((gulp.dest('app/js/dist')))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/css/*.css', gulp.parallel('css'));
    gulp.watch(['app/js/**/*.js', '!app/js/dist/main.min.js'], gulp.parallel('concat-and-minify-js'));
});

gulp.task('default', gulp.parallel('concat-and-minify-js', 'browser-sync', 'watch'));