'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
        // Ignore unchanged files
        .pipe(changed(config.fonts.dest))
        .pipe(gulp.dest(config.fonts.dest))
        .pipe(browserSync.stream());
});
