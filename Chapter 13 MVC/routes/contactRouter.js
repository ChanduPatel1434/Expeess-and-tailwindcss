

//external module

const express = require('express');

//local MOdule

const contactsController = require("../controller/contact")

const contactRouter = express.Router();


contactRouter.get('/contact-us', contactsController.getContacts );


contactRouter.post('/contact-success',contactsController.postcontats);
  

module.exports = contactRouter;
