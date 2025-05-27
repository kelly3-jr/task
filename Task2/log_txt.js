const fs = require('fs');
const http = require('http');

const date = new Date().toISOString();
const logMessage = `Server started at: ${date}\n`;

fs.writeFile('log.txt', logMessage, (err) => {
  if (err) {
    console.error('Failed to write log:', err);
  } else {
    console.log('Log file created.');
  }
});

const server = http.createServer((req, res) => {
  const logEntry = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFile('access.log', logEntry, (err) => {
    if (err) console.error('Logging failed:', err);
  });

  res.writeHead(200);
  res.end('Logged');
});

server.listen(3000, () => {
  console.log('Logger server running at http://localhost:3000');
});