'use strict';

import config from '../config';
import gulp   from 'gulp';
import tar   from 'gulp-tar';

gulp.task('tar', function () {
    return gulp.src(config.tar.src)
        .pipe(tar(config.tar.destFile))
        .pipe(gulp.dest(config.tar.destDir));

});
