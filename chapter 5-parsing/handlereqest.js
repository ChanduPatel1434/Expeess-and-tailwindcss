const {sumRequestHandles} = require('./sum')

const requestHandle = (req, res )=>{
  console.log(req.url , req.method);
  if (req.url === '/'){
    res.setHeader('Content-Type','text/html');
res.write(`
  <html>
  <head><title>Node JS Practice session </title><head>
  <bod>
  <h1 style="text-align:center">well come To node Practice</h1>
  <a href="/calculater">Go to Calculator app</a>
  </body>
  
  `)
  return res.end();

  } else if (req.url.toLowerCase() === '/calculater') {

    res.write(`
      <h1> Here is the Calculater</h1>
      <form action="/calculater-results" method="POST">
      <input type="text" name="frist" placeholder="Enert Numric digit" />
      <input type="text" name="second" placeholder="Enert Numric digit" />
      <input type="submit" value="sum" />
      </form>
      </html>
      `)
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculater-results' && req.method === 'POST'){
   return sumRequestHandles(req, res);
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(`<div style="align-item:center">
     <h1 style="text-align:center">well come To node Practice</h1>
    <a href="/" >Go to  Home  page</a>
    </div>`)
  return res.end();
}

module.exports = requestHandle;