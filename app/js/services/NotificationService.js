'use strict';

import {Injectable} from 'angular2/core';
import toastr from 'toastr';

@Injectable()
export default class NotificationService {
    constructor() {
        toastr.options = {
            positionClass: "toast-top-center"
        };
    }

    success(text) {
        toastr.clear();
        toastr.options.timeOut = 5000;
        toastr.success(text);
    }

    error(text) {
        toastr.clear();
        toastr.options.timeOut = 0;
        toastr.error(text);
    }
}
