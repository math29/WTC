/**
 * Broadcast updates to client when the model changes
 */

 'use strict';

 var LanguageEvents = require('./language.event');
 var events = ['save' , 'remove'];

exports.register = function(socket) {

  for(var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener( 'language:' + event, socket);

    LanguageEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
  }
};

function createListener(event, socket) {
  return function(doc) {
    socket.emit(event, doc);
  }
}

function removeListener(event, listener) {
  return function() {
    LanguageEvents.removeListener(event, listener);
  }
}
