'use strict';

export default class EventModel {
    constructor(title, priority, started, finished, description) {
        this.id = 0;
        this.title = title;
        this.priority = priority;
        this.started = started;
        this.finished = finished;
        this.description = description;
    }

    convertToJsonString() {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            priority: this.priority,
            started: EventModel.serializeDate(this.started),
            finished: EventModel.serializeDate(this.finished),
            description: this.description
        });
    }

    static serializeDate(dateAsString) {
        if(!dateAsString) {
            return [];
        }
        var date = new Date(dateAsString);
        return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), 0];
    }
}