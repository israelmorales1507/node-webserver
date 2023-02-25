const http = require("http");
http.createServer((req, res) => {
    console.log(req);
    res.writeHead(404);
    res.write("404 | page not found");
    res.end();
}).listen(8080);

console.log("Escuchanndo en el puerto...",8080);