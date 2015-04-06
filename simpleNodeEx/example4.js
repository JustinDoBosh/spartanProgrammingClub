var http = require('http');

var handleRequests = function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Welcome to Node Essential Training\n');
};

var server = http.createServer(handleRequests);

server.listen(3000, 'localhost');