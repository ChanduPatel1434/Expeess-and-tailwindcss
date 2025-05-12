const express = require('express');


const hostControler = require("../controller/hostControler")

//local modules

const hostRouter = express.Router();



hostRouter.get('/add-home', hostControler.getAddHome );
hostRouter.post('/home-succeses', hostControler.postAddHome);
hostRouter.get('/host-homes',hostControler.getHostHomes);

module.exports = hostRouter;