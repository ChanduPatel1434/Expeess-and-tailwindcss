//fake data base
const registerContacts = [];
const Home = require("../models/homemodel");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);

   res.render("host/edit-home", {
    currentPage: "Edit-home",
    pageTitle: "Add Home page || AIRBNB ",
    editing: false,  
    home: null  
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId ;
  const editing = req.query.editing === "true";
  Home.findById (homeId, home =>{
    if(!home){
      return res.redirect("/host/host-homes")
    }
  })
  res.render("host/edit-home", {
    currentPage: "Edit Your Home",
    pageTitle: "Edit Home page || AIRBNB ",
    editing : editing,
    home : home
  });
};

exports.postEditHomes = (req,res,next) =>{
  const { name, location, price, rating,  bedrooms ,image } = req.body;
  const home = new Home(name,  location,  price, rating, bedrooms, image);
  home.Id = Id;
  home.save();
res.redirect('/host/host-homes');
}

exports.postAddHome = (req, res, next) => {
  const { name, location, price, rating,  bedrooms ,image } = req.body;
  const home = new Home(name,  location,  price, rating, bedrooms, image);
  home.save();
  res.render("host/home-success", {
    currentPage: "Home Added Succsesfully",
    pageTitle: "Home Succsess || AIRBNB ",
  });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((homes)=>{
    res.render("store/index", {
      pageTitle: "Home || AIRBNB ",
      currentPage: "Home",
      registerHomes: homes,
      registerContacts: registerContacts,
    });

  });
 
};

exports.getHostHomes = (req, res, next) =>{
  Home.fetchAll((homes)=>{
    res.render("host/host-home-list", {
      pageTitle: "Home || AIRBNB ",
      currentPage: "Home",
      registerHomes: homes,
      
    });

  });
  
}

exports.page404 = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("404", {
    currentPage: "Page NOT Found",
    pageTitle: "Page NOT Found || AIRBNB ",
  });
};

exports.registerContacts = registerContacts;
