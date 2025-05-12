//core module
const path = require('path');

//external module
const registerContacts = require('../controller/homeController')
const express = require('express');

const contactRouter = express.Router();





contactRouter.get('/contact', (req, res,next)=>{
console.log(req.url, req.method);
res.render('contact',{currentpage: 'contact', pageTitle: 'Contact-us'})
});


contactRouter.post('/contact-success', (req, res,next)=>{
  console.log(registerContacts);
  registerContacts.push(req.body);
  res.render('host/contact-success', {currentpage:'contact-success',pageTitle: 'Contact-Succeses'})
  });
  

module.exports = contactRouter;

