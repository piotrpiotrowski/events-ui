'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('development', ['clean'], function (cb) {
    global.isProd = false;
    runSequence(['styles', 'images', 'fonts', 'views', 'browserify', 'replacePropertiesPlaceholders'], 'watch', cb);
});