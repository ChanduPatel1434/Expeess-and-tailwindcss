const sumRequestHandles = (req, res) =>{
  console.log('in you sum ur', req.url);
  const body = []

  req.on('data', chunk =>{body.push(chunk)});
  req.on('end',()=>{
    const bodystr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodystr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.frist) + Number(bodyObj.second);

    console.log(result);
    res.setHeader('Content-type', 'text/html')
    res.write(`
      <html>
  <head><title>Node JS Practice session </title><head>
  <bod>
  <h1 style="text-align:center">Her Shows The Results</h1>
  <h3>Your sum is ${result}</h3>
  </body>
  </html>
      `);
      return  res.end();
  });
}

exports.sumRequestHandles = sumRequestHandles;