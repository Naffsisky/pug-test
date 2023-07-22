var http = require("http");
var fs = require("fs");

function renderHtml(path, response) {
  fs.readFile(path, null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File tidak ditemukan.");
    } else {
      response.write(data);
    }
    response.end();
  });
}

function css(request, response) {
  if (request.url === "./style.css") {
    response.writeHead(200, { "Content-Type": "text/css" });
    var fileContents = fs.readFileSync("./style.css", { encoding: "utf8" });
    response.write(fileContents);
    response.end();
  }
}

var server = http.createServer(function (request, response) {
  css(request, response);
  response.writeHead(200, { "Content-Type": "text/html" });
  renderHtml("./index.html", response);
});

console.log("Server aktif di http://127.0.0.1:3000/");
server.listen(3000);
