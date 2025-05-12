const express = require('express');

const rootDir = require('../utilities/rooDir');

const homeRouter = express.Router();

homeRouter.get('/', (req,res,next)=>{
  console.log("home page", req.url, req.method);
  res.sendFile(rootDir ,'views', 'index.html')
})




module.exports = homeRouter;