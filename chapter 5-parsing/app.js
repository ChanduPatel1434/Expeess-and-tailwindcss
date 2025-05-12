const http =require('http');
const requestHandle =require('./handlereqest')

const server = http.createServer(requestHandle);


const PORT = 3001;

server.listen(PORT, ()=>{
  console.log(`server running on http://localhost:${PORT}`)
});
