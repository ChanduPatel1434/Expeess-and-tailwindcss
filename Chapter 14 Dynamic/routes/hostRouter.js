const express = require('express');
const path = require('path');
const hostRouter = express.Router();
//local modules
const homeController = require('../controller/homeController');
const { registerContacts } = require('./contactRouter');




hostRouter .get('/', homeController.getHome );
hostRouter .get('/add-home', homeController.getAddHome);
hostRouter .post('/home-succeses', homeController.postAddHome)
hostRouter .get('/host-home-list', homeController.getHostHomes)
hostRouter.get('/edit-home/:homeId' , homeController.getEditHome);
hostRouter.post('/edit-home', homeController.postEditHomes)










module.exports = hostRouter ;
 