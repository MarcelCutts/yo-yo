var restify = require('restify');

/**
 * Dev server settings
 * @type {String}
 */
var port = '8080';
var ipAddress = '127.0.0.1';

/**
 * Create, name and version server object
 */
var server = restify.createServer({
	name: "yo-yo",
	version: '0.0.1'
});

/**
 * Placeholder text to return some content at root
 * @param   req  Properties of the HTTP request
 * @param   res  Properties of the HTTP result
 * @param   next Async flow control object
 * @return next object
 */
server.get('/', function(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf-8'
	});
	res.end('Placeholder text');
	return next();
});

/**
 * Initialises server at a certain location and informs user
 */
server.listen(port, ipAddress, function() {
	console.log('%s listening at %s ', server.name, server.url);
});