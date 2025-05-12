
const { registerContacts } = require('../controller/contact');
const Home = require('../models/home');


exports.getIndex = (req,res, next)=>{
 res.render('store/index', {
    registerHomes: registerHomes  ,
    registerContacts: registerContacts,
    pageTitle: "Airbnb Index Page",
    currentPage: 'index'
  })
}

exports.getHomes = (req, res, next) => {
  
    res.render('store/home', { pageTitle: "Host Homes List", currentPage: 'index', registerHomes: registerHomes });
  

  
};

exports.getFavourites = (req, res,next)=>{

    res.render('store/favourites', {
      registerHomes: registerHomes,
      pageTitle: "AIr bnb Home list",
      currentPage: 'favourites'
    })
  }


exports.getBookings  = (req, res, next)=>{
  res.render('store/bookings', {
    registerHomes: registerHomes,
    pageTitle: "AIr bnb Home list",
    currentPage: 'bookings'
  })
}