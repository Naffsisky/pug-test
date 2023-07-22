var http = require("http");
var pug = require("pug");

var server = http.createServer(function (request, response) {
    var data = {
        nama: "Prinafsika",
        kelas: "Node JS",
        semester: ['satu', 'tiga', 'lima', 'tujuh', 'sembilan']
    };
    var template = pug.renderFile('./template.pug', data);
    response.end(template);
});

server.listen(3000);