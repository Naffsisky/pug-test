var http = require("http");
var url = require("url");
var qs = require("querystring");

var server = http.createServer(function (request, response) {
  var query = url.parse(request.url).query;
  var parameters = qs.parse(query);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<strong>Nama Path : </strong>" + url.parse(request.url).pathname + "<br>");
  response.write("<strong>Parameter : </strong><br>");
  for (var property in parameters) {
    response.write(property + " : " + parameters[property] + "<br>");
  }

  response.end();
});

server.listen(3000);
console.log("Server aktif di http://127.0.0.1:3000/");
