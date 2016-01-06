'use strict';

import config            from '../config';
import browserSync       from 'browser-sync';
import gulp              from 'gulp';
import mockBackendServer from './mockedBackendServer.js'

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.buildDir,
            middleware: [
                mockBackendServer(config.mockDirectory)
            ]
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        ghostMode: {
            links: false
        }
    });
});
