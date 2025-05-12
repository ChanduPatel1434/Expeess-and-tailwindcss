const express = require('express');
const path = require('path');

//local module imports
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');

const rootDir = require('./path/pathUtilities');






const app = express();

app.use(express.static(path.join(rootDir, 'public/css')));

app.use(homeRouter);
app.use(contactRouter);



app.use((req, res,next)=>{
  console.log("final middleware check in ", req.url, req.method)

  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3002;

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})