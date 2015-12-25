'use strict';

import {Component} from 'angular2/core';
import {NgModel, NgForm, NgFor}    from 'angular2/common';
import EventModel from '../models/EventModel';
import EventService from '../services/EventService';
import {HTTP_PROVIDERS} from 'angular2/http';
import AppSettings from '../services/AppSettings';


@Component({
    selector: 'create-event',
    directives: [NgModel, NgForm, NgFor],
    providers: [EventService, HTTP_PROVIDERS, AppSettings],
    template: `
    <form class="form-horizontal">
        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">Title</label>
            <div class="col-sm-6">
                <input id="title" type="text" class="form-control" placeholder="Title" [(ngModel)]="event.title" ngControl="title" required/>
            </div>
        </div>
        <div class="form-group">
            <label for="started" class="col-sm-2 control-label">Start time</label>
            <div class="col-sm-6">
                <input id="started" type="datetime-local" class="form-control" [(ngModel)]="event.started" ngControl="started" required/>
            </div>
        </div>
        <div class="form-group">
            <label for="priority" class="col-sm-2 control-label">Priority</label>
            <div class="col-sm-6">
                <select id="priority" class="form-control" [(ngModel)]="event.priority" ngControl="priority">
                    <option *ngFor="#priority of priorities"  [value]="priority">{{priority}}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="description" class="col-sm-2 control-label">Description</label>
            <div class="col-sm-6">
                <textarea id="description" class="form-control" rows="7" placeholder="Description" [(ngModel)]="event.description" ngControl="description"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-info" (click)="save()">Save</button>
                <button type="reset" class="btn btn-default">Cancel</button>
            </div>
        </div>
    </form>
    {{event.title}}
    `
})
export default class CreateEvent {
    constructor(eventService: EventService) {
        this.eventService = eventService;
        this.priorities = ['Low', 'Medium', 'High'];
        this.event = new EventModel("", this.priorities[1], new Date());
    }

    save() {
        var event = this.event.convertToJsonString();
        this.eventService.save(event);
    }
}
