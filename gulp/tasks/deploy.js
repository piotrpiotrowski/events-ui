'use strict';

import gulp from 'gulp';
import copy2 from 'gulp-copy2';
import config from '../config';


gulp.task('deploy', ['production'], function () {
    var paths = [
        {src: config.tar.getFullPath(), dest: '../events-docker/nginx/' + config.tar.destFile}
    ];
    return copy2(paths);
});