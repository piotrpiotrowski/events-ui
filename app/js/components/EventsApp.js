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
    <h1>Events Manager -
        <small></small>
        <a [routerLink]="['CreateEvent']">(Add New Event)</a>
    </h1>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    {path: '/', component: EventsList, as: 'EventsList', useAsDefault: true},
    {path: '/create-event', component: CreateEvent, as: 'CreateEvent'}
])
export default class EventsApp {
}
