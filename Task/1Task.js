// 1) simple HTTP sever that responds "hello, world!"

const http = require('http');

const server = http.createServer ((req, res ) =>{
    res.statusCode = 200;
    res.end('Hello, World!');

});

server.listen(3000 , ()=>
{
   console.log('server running on port 3000');
   
});


