'use strict';

import {Injectable} from 'angular2/core';
import {Headers} from 'angular2/http';

@Injectable()
export default class AppSettings {
    constructor() {
        this.appTitle = 'Events UI';
        this.apiUrl = "$api_url";
        this.jsonHeaders = new Headers();
        this.jsonHeaders.append('Accept', 'application/json');
        this.jsonHeaders.append('Content-Type', 'application/json');
    }
}
