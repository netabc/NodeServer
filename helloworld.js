var http = require("http");
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"});  
    response.write("Hello World");  
    response.end();
}).listen(10000);
console.log("nodejs start listen 10000 port!");