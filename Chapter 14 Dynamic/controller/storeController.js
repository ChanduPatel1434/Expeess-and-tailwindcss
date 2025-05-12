const Favourites = require("../models/favourites");
const Home = require("../models/homemodel");

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};



exports.postAddFavourites = (req,res, next)=>{
const homeId = req.body.homeId;
Favourites.addFavourites(homeId);
console.log(req.body);
res.redirect('/favourites')
}

exports.getFavouriteList = (req, res, next) => {
  Favourites.getFavourites((favourites)=>{
    Home.fetchAll((registerHomes) => {
      const favouritesWithDetails = registerHomes.filter(home =>
        favourites.includes(home.id));
      res.render("store/favourites", {
        favourites: favouritesWithDetails,
        pageTitle: "My Favourites || air BnB",
        currentPage: "favourites",
      })
    })
  })
  
};



exports.getHomeDetails = (req, res, next)=>{

  const homeId = req.params.homeId
  Home.findById (homeId , home=>{
    if(!home){
      console.log("here are homes", home)
       return res.redirect("/homes")
    } else{
      res.render('store/home-details', {pageTitle: "Home Details", currentPage: "home details",home: home  })
    }
  })

}