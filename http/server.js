const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Got a request');
    res.end();
});

server.listen(4600);

//Localhost:4600

//this is kind of a toy, little mini server