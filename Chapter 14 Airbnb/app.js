const express = require('express');
const path = require('path');


const homeRouter = require('./routes/homeRouter');
const rootDir = require('./utilities/rooDir');


const app = express();
app.use(express.static(path.join(rootDir,'public')));




app.use(homeRouter);





const PORT = 3000;

app.listen(PORT, ()=>{
  console.log(`server running on http://localhost:${PORT}`);
})