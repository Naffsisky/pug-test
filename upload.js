const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

const html = fs.readFileSync("./index.html");

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  if (request.method === "GET") {
    response.end(html);
  } else if (request.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(request, function (err, fields, files) {
      if (err) {
        response.end("Gagal mengupload file");
        throw err;
      }

      console.log("Files:", files);

      const tempFile = files.userFile[0].filepath;
      const destFile = "./uploads/" + files.userFile[0].originalFilename;

      console.log("Temp File:", tempFile);
      console.log("Dest File:", destFile);

      fs.rename(tempFile, destFile, function (error) {
        if (error) {
          response.end("Gagal mengupload file");
          throw error;
        }

        response.end("Berhasil mengupload file" + "<br /><br /><a href='/'>Kembali</a>");
      });
    });
  }
});

server.listen(3000);
