const http = require("http")

http.createServer((request,response)=>{
    response.writeHead(200, {"content-type":"aplication/json"})

    response.end(JSON.stringify({
        message:"Meu segundo servidor em Node.js"
    }))
}).listen(3006,() => {console.log("Servidor está sendo executado pela segunda vez na porta 3006")})