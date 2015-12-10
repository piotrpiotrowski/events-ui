'use strict';

const EventModel = require('../models/EventModel');

function CreateEventController(eventService) {
    'ngInject';
    const scope = this;
    scope.priorities = ['Low', 'Medium', 'High'];
    scope.pageTitle = 'create your new event';
    scope.eventStarted = new Date();
    scope.event = new EventModel("", 'Medium');
    scope.save = function () {
        scope.event.started = EventModel.serializeDate(scope.eventStarted);
        eventService.save(scope.event);
    };
}

export default {
    name: 'CreateEventController',
    fn: CreateEventController
};
