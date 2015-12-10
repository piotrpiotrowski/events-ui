'use strict';

import angular from 'angular';

// angular modules
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
    'ui.router',
    'templates',
    'app.filters',
    'app.controllers',
    'app.services',
    'app.directives'
];

console.log(process.env);

var eventsApp = angular.module('eventsApp', requires);
eventsApp.constant('appSettings', require('./constants'));
eventsApp.config(require('./onConfig'));
eventsApp.run(require('./onRun'));

angular.bootstrap(document, ['eventsApp'], {
    strictDi: true
});
