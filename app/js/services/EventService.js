'use strict';

import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Headers} from 'angular2/http';

import AppSettings from './AppSettings';
import NotificationService from './NotificationService';
import ServerResponseService from './ServerResponseService';

@Injectable()
export default class EventService {
    constructor(http:Http, appSettings:AppSettings, notificationService:NotificationService, serverResponseService:ServerResponseService) {
        this.http = http;
        this.appSettings = appSettings;
        this.notificationService = notificationService;
        this.serverResponseService = serverResponseService;
        this.eventSuccessfullySavedMessage = 'Event has been successfully saved';
        this.eventCreateDefaultErrorMessage = 'Error on event save';
    }

    create(event) {
        var that = this;
        var eventJsonString = event.convertToJsonString();
        return new Promise((resolve, reject) => {
            that.createEvent(eventJsonString, resolve, reject);
        });
    }

    createEvent(eventJsonString, resolve, reject) {
        var that = this;
        var options = new RequestOptions({
            headers: that.appSettings.jsonHeaders
        });
        that.http.post(that.appSettings.apiUrl + '/events', eventJsonString, options)
            .subscribe(successResponse => {
                if (that.serverResponseService.isSuccessful(successResponse)) {
                    that.notificationService.success(that.eventSuccessfullySavedMessage);
                    resolve(successResponse.json());
                } else {
                    that.notificationService.error(that.eventCreateDefaultErrorMessage + " success");
                }
            },
            errorResponse => {
                if (!that.serverResponseService.wasRequestAborted(errorResponse)) {
                    var errorMessage = that.serverResponseService.extractErrorMessage(errorResponse.json(), that.eventCreateDefaultErrorMessage + " error");
                    that.notificationService.error(errorMessage);
                    if (reject) {
                        reject(errorResponse.json());
                    }
                }
            }
        );
    }
}
