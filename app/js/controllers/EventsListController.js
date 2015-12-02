'use strict';

function EventsListController() {
  // ViewModel
  const scope = this;
  scope.title = 'Events list';
  scope.number = 1234;
}

export default {
  name: 'EventsListController',
  fn: EventsListController
};
