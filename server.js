var http = require("http");
var pug = require("pug");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (request.url == "/") {
      var html = pug.renderFile("./template.pug");
      response.end("<h1>Selamat Datang di Node JS</h1>" + html);
    } else if (request.url == "/katalog") {
      response.end("<h1>Ini adalah halaman katalog</h1>");
    } else if (request.url == "/kontak") {
      response.end("<h1>Ini adalah halaman kontak</h1>");
    } else {
      response.status = 404;
      response.end("<h1>404 - Halaman tidak ditemukan</h1>");
    }
  })
  .listen(3000);

console.log("Server aktif di http://127.0.0.1:3000/");
