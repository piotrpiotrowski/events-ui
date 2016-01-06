'use strict';

import {Component} from 'angular2/core';
import EventForm from './EventForm';
import EventModel from '../models/EventModel';

@Component({
    selector: 'create-event',
    directives: [EventForm],
    template: `
    <event-form [mode]="mode" [event]="event" [formTitle]="title"></event-form>
    `
})
export default class CreateEvent {
    constructor() {
        this.mode = 'create';
        this.title = 'Create your new event';
        this.event = new EventModel("", 'Medium');
    }
}
