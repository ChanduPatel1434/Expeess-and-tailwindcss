const express = require('express');
const path = require('path')

  const rootDir = require('../path/pathUtilities');


const homeRouter = express.Router();


homeRouter.get('/', (req, res, next)=>{
  console.log("home page check in ", req.url , req.method)
  res.sendFile(path.join(rootDir,'views', 'index.html'));
})





module.exports = homeRouter;