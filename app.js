var module1 = require("./module1"); //modulo donde estan las promesas

var url = require("url");
var fs = require("fs");

function renderHTML(path, response) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    var path = url.parse(request.url).pathname;

    switch (path) {
      case "/":
        renderHTML("./index.html", response);
        break;

      case "/p0":
        renderHTML("./p0.html", response);
        break;

      case "/p1":
        renderHTML("./p1.html", response);
        break;

      case "/p2":
        renderHTML("./p2.html", response);
        break;
      case "/p3":
        renderHTML("./p3.html", response);
        break;
      case "/p4":
        renderHTML("./p4.html", response);
        break;
      case "p5":
        renderHTML("./p5.html", response);
        break;
      case "/p6":
        renderHTML("./p6.html", response);
        break;
      case "/p7":
        renderHTML("./p7.html", response);
        break;
      case "/p8":
        renderHTML("./p8.html", response);
        break;
      case "/p9":
        renderHTML("./p9.html", response);
        break;

      default:
        response.writeHead(404);
        response.write("Route not Defined");
        response.end();
    }
  }
};
