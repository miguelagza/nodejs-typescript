import events from 'events';

class MyEmitter extends events {}

// Init Object
const myEmitter = new MyEmitter();

// Event listener

myEmitter.on('event', (): void => {
  console.log('Event fired');
});

// Init event
myEmitter.emit('event');
