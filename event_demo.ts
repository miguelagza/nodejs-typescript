import { EventEmitter } from 'events';

// Init Object
const myEmitter = new EventEmitter();

// Event listener

myEmitter.on('event', (): void => {
  console.log('Event fired');
});

// Init event
myEmitter.emit('event');
