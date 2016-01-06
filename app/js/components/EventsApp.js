'use strict';

import {Component, View, Attribute} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import EventsList from './EventsList';
import CreateEvent from './CreateEvent';

@Component({
    selector: 'events-app'
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <button [routerLink]="['CreateEvent']" class="create-event-button">{{addEventLabel}}</button>
    <h1>{{title}}</h1>
    <hr>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    {path: '/', component: EventsList, as: 'EventsList', useAsDefault: true},
    {path: '/create-event', component: CreateEvent, as: 'CreateEvent'}
])
export default class EventsApp {
    constructor() {
        this.title = 'Events Manager';
        this.addEventLabel = 'Add New Event';
    }
};
