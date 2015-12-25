'use strict';

import {Injectable} from 'angular2/core';

@Injectable()
export default class AppSettings {
    constructor() {
        this.appTitle = 'Events UI';
        this.apiUrl = "$api_url";
    }
}
