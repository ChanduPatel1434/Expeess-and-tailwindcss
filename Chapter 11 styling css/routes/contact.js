const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('../path/pathUtilities')


const contacRouter = express.Router();

contacRouter.get('/contact-us',(req, res, next)=>{
  console.log('contac page check in ', req.url , req.method, req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
});

contacRouter.use(bodyParser.urlencoded());

contacRouter.post('/contact-success', (req, res, next)=>{
  console.log("contac-succecess page check in", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));

})


module.exports = contacRouter;