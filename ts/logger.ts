import { EventEmitter } from 'events';
import { v4 as uuidv4 } from 'uuid';

export class Logger extends EventEmitter {
  log(msg: string) {
    // Call event
    this.emit('message', { id: uuidv4(), msg });
  }
}
