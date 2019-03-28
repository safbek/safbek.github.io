var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache = require('gulp-cache'); // Подключаем библиотеку кеширования

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('build/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

/*gulp.task('html', function() { // Создаем таск Sass
    return gulp.src('src/*.html') // Берем источник
        .pipe(gulp.dest('build')) // Выгружаем результата в папку app/css
       .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});*/

gulp.task('pug', function() { // Создаем таск Sass
    return gulp.src('src/pug/**/*.pug') // Берем источник
        .pipe(pug({pretty: true})) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('build')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'build', // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch(['src/sass/**/*.scss'], ['sass']), // Наблюдение за sass файлами
    /*gulp.watch(['src/*.html'], ['html']), // Наблюдение за HTML файлами в корне проекта*/
    gulp.watch(['src/pug/**/*.pug'], ['pug']);
    // Наблюдение за другими типами файлов
});

gulp.task('img', function() {
    return gulp.src('src/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('build/img')); // Выгружаем на продакшен
});

gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('libs-js', function() {
    gulp.src('src/libs/**/*')
        .pipe(gulp.dest('build/libs'))
});


gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);