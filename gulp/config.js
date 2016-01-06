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
        sassIncludePaths: [
            'node_modules/bootstrap-sass/assets/stylesheets',
            'node_modules/toastr/'
        ]
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
    defaultFile: "index.html",
    views: {
        index: 'app/index.html',
        src: 'app/views/**/*.html',
        dest: 'app/js'
    },
    tar: {
        src: 'build/**/*.{html,xml,json,css,js,js.map,css.map,png}',
        destDir: './build/',
        destFile: 'events-ui.tar',
        getFullPath: function () {
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
    appProperties: {
        integration: {
            $api_url: "http://192.168.0.10:8080/events-web"
        },
        mock: {
            $api_url: "http://localhost:3000"
        }

    },
    babelifyOptions: {
        "presets": ["es2015"],
        "plugins": [
            "angular2-annotations",
            "transform-decorators-legacy",
            "transform-class-properties",
            "transform-flow-strip-types"
        ]
    },
    mockDirectory: '/../../mock',
    init: function () {
        this.views.watch = [
            this.views.index,
            this.views.src
        ];
        return this;
    },
    getReplacePluginConfig: function (mode) {
        var patterns = [];
        var appProperties = this.appProperties[mode];
        for (var propertyKey in   appProperties) {
            if (appProperties.hasOwnProperty(propertyKey)) {
                patterns.push({
                    match: propertyKey + '',
                    replacement: appProperties[propertyKey]
                });
            }
        }
        return {
            usePrefix: false,
            patterns: patterns
        };
    }

}.init();
