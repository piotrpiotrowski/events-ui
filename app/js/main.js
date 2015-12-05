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

// mount on window for testing
window.app = angular.module('eventsApp', requires);

angular.module('eventsApp').constant('AppSettings', require('./constants'));
angular.module('eventsApp').config(require('./onConfig'));
angular.module('eventsApp').run(require('./onRun'));

angular.bootstrap(document, ['eventsApp'], {
  strictDi: true
});
