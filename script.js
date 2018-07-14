'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === "GET" && request.url === "/") {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) throw err;
            response.write(data);
        });
    } else {
        response.setHeader("Content-Type", "image/png");
        response.statusCode = 404;
        fs.readFile('./404.png', function (err, data) {
            if (err) throw err;
            response.end(data);
        });
    }
});
server.listen(9000);