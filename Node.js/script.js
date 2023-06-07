const http = require("http"); //declarei a variável http

http.createServer((request, response) => {
    response.writeHead(200, {"content-type": "application/json"});

    response.end(JSON.stringify({
        message: "Meu primeiro servidor em NodeJS"
    }));

}).listen(3008, () => console.log("Servidor está sendo executado na porta 3008"));