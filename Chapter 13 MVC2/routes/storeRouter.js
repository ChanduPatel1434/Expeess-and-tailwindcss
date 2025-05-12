const express = require('express');


const storeRouter = express.Router();

const storeController = require("../controller/storeController")



storeRouter.get('/', storeController.getIndex);
storeRouter.get('/home', storeController.getHomes);
storeRouter.get('/bookings', storeController.getBookings);
storeRouter.get('/favourites',storeController.getFavourites)



module.exports =storeRouter;