'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('integration', ['clean'], function (cb) {
    global.isProd = false;
    global.mode = 'integration';
    runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'watch', cb);
});