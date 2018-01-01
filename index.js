var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Selam bu benim alan adim bundan once alip 3-4 sene geri vermeyen arkadas, alan adi artik benim ve benim kalacak! :). \nSimdilik Node-js instance'i uzerinde calisiyor. Ileride buralar degerlenecek. :) \nhttp://www.linkedin.com/in/yilmazalican");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
