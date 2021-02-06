import http from 'http';

// Create server object

http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write('Hello world');
    res.end();
  })
  .listen(5000, (): void => console.log('Server running...'));
