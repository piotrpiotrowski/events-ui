'use strict';

import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Headers} from 'angular2/http';

import AppSettings from './AppSettings';

@Injectable()
export default class EventService {
    constructor(http:Http, appSettings:AppSettings) {
        this.http = http;
        this.appSettings = appSettings;
    }

    save(eventJsonString) {
        var that = this;
        return new Promise((resolve, reject) => {
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new RequestOptions({
                headers: headers
            });
            that.http.post(that.appSettings.apiUrl + '/events', eventJsonString, options)
                .subscribe(
                    data =>  resolve(data),
                    err =>  reject && reject(err),
                    () => console.log(arguments)
                );
        });
    }
}
