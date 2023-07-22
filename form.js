var http = require("http");
var qs = require("querystring");

console.log("Wait ...");
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  if (request.url == "/") {
    switch (request.method) {
      case "GET":
        response.end(
          "<h1>Formulir Masuk</h1>" +
            "<form method='POST' action='/' />" +
            "<label><b>Nama Lengkap:</b></label><br>" +
            "<input type='text' name='nama' placeholder='Masukkan Nama Lengkap' /><br>" +
            "<label><b>Email:</b></label><br>" +
            "<input type='text' name='email' placeholder='Masukkan Email' /><br>" +
            "<input type='submit' name='btnSubmit' value='Kirim' />" +
            "</form>"
        );
        break;
      case "POST":
        var body = "";
        request.on("data", function (data) {
          body += data;
        });
        request.on("end", function () {
          var form = qs.parse(body);
          response.end("Data yang dikirim : <br>" + "Nama : " + form["nama"] + "<br>" + "Email : " + form["email"]);
        });
        break;
      default:
        response.end("Metode pengiriman tidak dikenal");
    }
  } else if (request.url == "/katalog") {
    response.end("<h1>Ini adalah halaman katalog</h1>");
  } else {
    response.status = 404;
    response.end("<h1>404 - Halaman tidak ditemukan</h1>" + "<a href='/'>Kembali</a>");
  }
});
console.log("Load Done!");
server.listen(3000);
console.log("Server aktif di http://127.0.0.1:3000/");
