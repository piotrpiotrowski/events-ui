'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'EventsListController as events',
    templateUrl: 'events.html',
    title: 'Events list'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;