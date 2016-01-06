'use strict';

import {Component} from 'angular2/core';
import {NgModel, NgForm, NgFor}    from 'angular2/common';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import EventModel from '../models/EventModel';
import EventService from '../services/EventService';
import AppSettings from '../services/AppSettings';
import NotificationService from '../services/NotificationService';
import ServerResponseService from '../services/ServerResponseService';

@Component({
    selector: 'event-form',
    inputs: ['event', 'mode', 'formTitle'],
    directives: [NgModel, NgForm, NgFor],
    providers: [EventService, HTTP_PROVIDERS, AppSettings, NotificationService, ServerResponseService],
    template: `
    <h3>{{formTitle}}</h3>
    <form class="form-horizontal" (ngSubmit)="save()" role="form" #eventForm="ngForm">
        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">{{titleLabel}}</label>
            <div class="col-sm-6">
                <input id="title" type="text" class="form-control" placeholder="{{titleLabel}}" [(ngModel)]="event.title" ngControl="title" #title="ngForm" maxlength="200" required/>
                <div [hidden]="!title.touched || title.valid" class="alert alert-danger">{{titleRequiredMessage}}</div>
            </div>
        </div>
        <div class="form-group">
            <label for="started" class="col-sm-2 control-label">{{startedLabel}}</label>
            <div class="col-sm-6">
                <input id="started" type="datetime-local" class="form-control" [(ngModel)]="event.started" ngControl="started" #started="ngForm" required/>
                <div [hidden]="!started.touched || started.valid" class="alert alert-danger">{{startedRequiredMessage}}</div>
            </div>
        </div>
        <div class="form-group">
            <label for="priority" class="col-sm-2 control-label">{{priorityLabel}}</label>
            <div class="col-sm-6">
                <select id="priority" class="form-control" [(ngModel)]="event.priority" ngControl="priority" required>
                    <option *ngFor="#priority of priorities"  [value]="priority">{{priority}}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="description" class="col-sm-2 control-label">{{descriptionLabel}}</label>
            <div class="col-sm-6">
                <textarea id="description" class="form-control" rows="7" placeholder="{{descriptionLabel}}" [(ngModel)]="event.description" ngControl="description" maxlength="500"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-info" [disabled]="!eventForm.form.valid">{{saveLabel}}</button>
                <button type="reset" class="btn btn-default" (click)="cancel()">{{cancelLabel}}</button>
            </div>
        </div>
    </form>
    `
})
export default class EventForm {
    constructor(eventService:EventService, router:Router) {
        this.eventService = eventService;
        this.router = router;
        this.priorities = ['Low', 'Medium', 'High'];
        this.titleLabel = 'Title';
        this.startedLabel = 'Start time';
        this.priorityLabel = 'Priority';
        this.descriptionLabel = 'Description';
        this.saveLabel = 'Save';
        this.cancelLabel = 'Cancel';
        this.titleRequiredMessage = 'Title is required';
        this.startedRequiredMessage = 'Event start date and time is required';
    }

    save() {
        var that = this;
        that.eventService[that.mode](that.event)
            .then(response => that.router.navigate(['EventsList']));
    }

    cancel() {
        this.router.navigate(['EventsList']);
    }
}
