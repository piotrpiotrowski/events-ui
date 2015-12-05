'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('production', ['clean'], function (cb) {
    cb = cb || function () {
    };
    global.isProd = true;
    runSequence(['styles', 'images', 'fonts', 'views'], 'browserify', 'tar', cb);

});
