var restify = require('restify');

// Dev settings
var port = '8080';
var ipAddress = '127.0.0.1';

var server = restify.createServer({
	name: "yo-yo",
	version: '0.0.1'
});

server.get('/', function(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf-8'
	});
	res.end('Placeholder text');
	return next();
});

server.listen(port, ipAddress, function() {
	console.log('%s listening at %s ', server.name, server.url);
});