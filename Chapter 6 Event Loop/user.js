const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<style> h1{text-align:center} </style>");
  res.write("<head><title>Node js </title></head>");

  if (req.url === "/") {
    res.write("<body><h1>Well Come To Node JS Practice</h1>");
    res.write('<a href="/form">Goto Form</a> ');
  } else if (req.url === "/form") {
    res.write(`
    <html>
    <head> <tittle> Node js EVENT LOOP Practice </title></head>
    <body>
    <h1> well come event loop sessions</h1>
    <form action="/form-results" method="POST"> 
    <label for="name">Name: </label>
      <input type="text" name="name" id="name" placeholder="Enter your Name">
  <label for="gender" name="male">Male</label>
  <input type="radio" for="gender" Name="male" value="Male">
  <label for="gender" name="Female">FeMale</label>
  <input type="radio" for="gender" Name="Female" value="Female">
  <input type="submit" value="submit">
  </form>

    
    `);
    return res.end();
  } else if (req.url === '/form-results' && req.method === 'POST'){
    fs.writeFileSync('user.txt' ,'chandu')
    res.end();
  }

});

const PORT = 4001;

server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
