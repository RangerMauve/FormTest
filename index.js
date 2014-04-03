var express = require("express");
var app = express();
var path = require("path");

app.use(express.bodyParser());

app.get("/", function (req, res) {
	res.sendfile(path.join(__dirname, "index.html"));
});

app.post("/", function (req, res) {
	var b = req.body;
	res.write("<!DOCTYPE html>\n<title>" + (b.title || "FormTest") + "</title>\n<dl>\n");
	Object.keys(b).forEach(function (key) {
		res.write("<dt>" + key + ":</dt><dd>" + JSON.stringify(b[key]) + "</dd>\n");
	});
	res.end("</dl>");
});

app.listen(80);
