'use strict';

export default {
    browserPort: 3000,
    UIPort: 3001,
    sourceDir: './app/',
    buildDir: './build/',
    styles: {
        src: 'app/styles/**/*.scss',
        dest: 'build/css',
        prodSourcemap: false,
        sassIncludePaths: []
    },
    scripts: {
        src: 'app/js/**/*.js',
        dest: 'build/js'
    },
    images: {
        src: 'app/images/**/*',
        dest: 'build/images'
    },

    fonts: {
        src: ['app/fonts/**/*'],
        dest: 'build/fonts'
    },
    assetExtensions: [
        'js',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?'
    ],
    defaultFile: "index.html",
    views: {
        index: 'app/index.html',
        src: 'app/views/**/*.html',
        dest: 'app/js'
    },
    tar: {
        src: 'build/**/*.{html,xml,json,css,js,js.map,css.map,png}',
        destDir: 'build/',
        destFile: 'events-ui.tar',
        getFullPath: function() {
            return this.destDir + this.destFile;
        }
    },
    browserify: {
        bundleName: 'main.js',
        prodSourcemap: false
    },
    test: {
        karma: 'test/karma.conf.js'
    },
    init: function () {
        this.views.watch = [
            this.views.index,
            this.views.src
        ];
        return this;
    }
}.init();
