'use strict';

import {Injectable} from 'angular2/core';

@Injectable()
export default class ServerResponseService {
    constructor() {
    }

    isSuccessful(response) {
        return response.status == 200
            || response.status == 201
            || response.status == 202
            || response.status == 204;
    }

    wasRequestAborted(response) {
        return false;
    }

    extractErrorMessage(response, defaultErrorMessage) {
        if(!response.code) {
            return defaultErrorMessage;
        }
        return response.code;
    }
}
