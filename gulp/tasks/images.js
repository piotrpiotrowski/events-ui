'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('images', function () {

    return gulp.src(config.images.src)
        // Ignore unchanged files
        .pipe(changed(config.images.dest))
        // Optimize
        .pipe(gulpif(global.isProd, imagemin()))
        .pipe(gulp.dest(config.images.dest))
        .pipe(browserSync.stream());

});
