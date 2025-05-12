//core modules
const path = require('path');


//external modules
const express  = require('express');


//local modules
const homeRouter = require('./routes/homeRouter');




const app = express();

app.use(homeRouter);

app.use((req, res,next)=>{
  console.log("last middleware running", req.url, req.method)
  res.send(`<h2> 404 found </h2>`)
})




const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`server running on http://localhost:${PORT}`)
})
