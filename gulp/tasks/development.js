'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('development', ['clean'], function (cb) {
    global.isProd = false;
    global.mode = 'mock';
    runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'watch', cb);
});