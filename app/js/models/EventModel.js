'use strict';

export default
class EventModel {
    constructor(title, priority, started, finished, description) {
        this.id = 0;
        this.title = title;
        this.priority = priority;
        this.started = started;
        this.finished = finished;
        this.description = description;
    }

    static serializeDate(date) {
        return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), 0];
    }
}