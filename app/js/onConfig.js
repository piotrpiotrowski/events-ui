'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);

    $stateProvider.state('Events List', {
        url: '/events',
        controller: 'EventsListController as scope',
        templateUrl: 'events.html',
        title: 'Events list'
    });
    $stateProvider.state('Create Event', {
        url: '/create-event',
        controller: 'CreateEventController as scope',
        templateUrl: 'event.html',
        title: 'Create Event'
    });
    $urlRouterProvider.otherwise('/create-event');
}

export default OnConfig;