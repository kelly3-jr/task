const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/time') {
    const date = new Date();
    res.statusCode(200);
    res.end(JSON.stringify({ time: date.toISOString() }));
  } else {
    res.statusCode(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
