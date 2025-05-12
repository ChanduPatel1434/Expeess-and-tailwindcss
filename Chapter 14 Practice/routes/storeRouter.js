//core module

//external module 
const express = require('express');

const storeRouter = express.Router();

const storeController = require('../controller/storeController')

storeRouter.get('/bookings', storeController.getBookings);
storeRouter.get('/favourites', storeController.getFavouriteList);
storeRouter.get('/home/:homeId', storeController.getHomeDetails)


module.exports = storeRouter;
