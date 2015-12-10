'use strict';

function EventService($http, appSettings) {
    'ngInject';
    return {
        save: function (eventModel) {
            return new Promise((resolve, reject) => {
                $http.post(appSettings.apiUrl + '/events', eventModel)
                    .success((data) => {
                        resolve(data);
                    }).error((err, status) => {
                        if (reject !== null) {
                            reject(err, status);
                        }
                    });
            });
        }};
}

export default {
    name: 'eventService',
    fn: EventService
};