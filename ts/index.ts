import http from 'http';

const server: http.Server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Home</h1>');
  }
});

type Port = number | string;

const PORT: Port = process.env.port || 5000;

server.listen(PORT, (): void => console.log(`Server running on port ${PORT}`));
