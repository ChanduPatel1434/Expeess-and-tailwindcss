const http = require('http')
req
const server  = http.createServer((req,res)=>{

  console.log(req.url,req.method);

});


const PORT = 3002;

server.listen('PORT', ()=>{
  console.log(` Server Runniing on http://localhost:${PORT}`)
});
  

