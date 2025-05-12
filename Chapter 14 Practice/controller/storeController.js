const Home = require("../models/homemodel");

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((homes) =>
    res.render("store/favourites", {
      registeredHomes: homes,
      pageTitle: "My Favourites || air BnB",
      currentPage: "favourites",
    })
  );
};

exports.getHomeDetails = (req, res, next)=>{
  console.log("Here is console get home details", homeId)
  res.render('store/home-details', {pageTitle: "Home Details", currentPage: "home details" , registeredHomes: homes})
}