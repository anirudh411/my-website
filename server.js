const {createServer} = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const React = require("react");
const fs = require('fs');
const ReactDomServer = require("react-dom/server");

const app = express();
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const dev = app.get('env') !== 'production';
console.log(dev, app.get('env'));

if (!dev) {
	app.disable('x-powered-by');
	app.use(compression());
	app.use(morgan('common'));
	app.use(express.static(path.resolve(__dirname, 'build')));
	app.get("*", (req, res) => {
		fs.readFile(path.resolve(__dirname, 'build', 'index.html'), "uft-8", (err, data) => {
			if (err) return res.status(500).send("Some error Occured");
			return res.send(data.replace('<div id="root"></div>', `<div>${ReactDomServer.renderToString(data)}</div>`))
		});
		//res.sendFile(path.resolve(__dirname, "build", 'index.html'));
	});
}
if (dev) {
	app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, error => {
	if (error) throw error;
	console.log("Server started");
});


