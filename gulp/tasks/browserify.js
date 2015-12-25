'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import gutil        from 'gulp-util';
import source       from 'vinyl-source-stream';
import sourcemaps   from 'gulp-sourcemaps';
import buffer       from 'vinyl-buffer';
import streamify    from 'gulp-streamify';
import watchify     from 'watchify';
import browserify   from 'browserify';
import babelify     from 'babelify';
import uglify       from 'gulp-uglify';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import debowerify   from 'debowerify';
import brfs         from 'brfs';
import bulkify      from 'bulkify';
import replace      from 'gulp-replace-task';
import print        from 'gulp-print';
import through      from 'through2';

function isSourcemapRequired() {
    return !global.isProd || config.browserify.prodSourcemap;
}

function rebundle(bundler, file) {
    const sourceMapLocation = global.isProd ? './' : '';
    return bundler
        .transform('babelify', config.babelifyOptions)
        .transform('debowerify', {})
        .transform('brfs', {})
        .transform('bulkify', {})
        .bundle()
        .on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulpif(isSourcemapRequired(), buffer()))
        .pipe(gulpif(isSourcemapRequired(), sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(global.isProd, streamify(uglify({compress: {drop_console: true}}))))
        .pipe(gulpif(isSourcemapRequired(), sourcemaps.write(sourceMapLocation)))
        .pipe(gulpif(!global.isProd, replacePropertiesPlaceholders()))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(browserSync.stream());
}

function replacePropertiesPlaceholders() {
    var patterns = [];
    const appProperties = config.appProperties;
    for (var propertyKey in  appProperties) {
        if (appProperties.hasOwnProperty(propertyKey)) {
            gutil.log('replace placeholder: ' + propertyKey + ' -> ' + appProperties[propertyKey]);
            patterns.push({
                match: propertyKey + '',
                replacement: appProperties[propertyKey]
            });
        }
    }
    return replace({
        usePrefix: false,
        patterns: patterns
    });
}

function watchifyOnUpdate(bundler, file) {
    return function () {
        rebundle(bundler, file);
        gutil.log('Rebundle...');
    }
}

gulp.task('browserify', function () {
    const file = 'main.js';
    var configuration = {
        entries: [config.sourceDir + 'js/' + file],
        debug: isSourcemapRequired(),
        cache: {},
        packageCache: {},
        fullPaths: !global.isProd
    };
    let bundler = browserify(configuration);
    if (!global.isProd) {
        bundler = watchify(bundler).on('update', watchifyOnUpdate(bundler, file));
    }
    return rebundle(bundler, file);
});
