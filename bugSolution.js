const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Handle errors properly
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 8080 is already in use. Please choose a different port.');
    process.exit(1);
  } else {
    console.error('An error occurred:', err);
    process.exit(1);
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});