'use strict';

import {Component} from 'angular2/core';

@Component({
    selector: 'events-list',
    template: `
        <h3>{{title}}</h3>
    `
})
export default class EventsList {
    constructor() {
        this.title = 'Table of your events';
    }
}
