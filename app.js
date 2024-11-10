const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/practice' && req.method === 'GET'){
        res.end("Practice work correctly");
    }
    else if (req.url === '/' && req.method === 'GET'){
    res.end("Welcome to Re:coded Backend Bootcamp!!!!");
    }
    else{
        res.end('Page not found');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;