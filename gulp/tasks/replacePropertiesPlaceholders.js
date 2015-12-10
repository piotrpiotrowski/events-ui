'use strict';

import gulp        from 'gulp';
import replace     from 'gulp-replace';
import config       from '../config';
import gutil        from 'gulp-util';
import browserSync  from 'browser-sync';

gulp.task('replacePropertiesPlaceholders', ['browserify'], function () {
    var jsDir = 'js/';
    var builtBundlePath = config.buildDir + jsDir;
    var stream = gulp.src([builtBundlePath + config.browserify.bundleName]);
    replacePropertiesPlaceholders(stream)
        .pipe(gulp.dest(builtBundlePath))
        .pipe(browserSync.stream());

    function replacePropertiesPlaceholders(stream) {
        const appProperties = config.appProperties;
        for (var propertyKey in  appProperties) {
            if (appProperties.hasOwnProperty(propertyKey)) {
                gutil.log('replace placeholder: ' + propertyKey + ' -> ' + appProperties[propertyKey]);
                stream = stream.pipe(replace(propertyKey, appProperties[propertyKey]));
            }
        }
        return stream;
    }
});