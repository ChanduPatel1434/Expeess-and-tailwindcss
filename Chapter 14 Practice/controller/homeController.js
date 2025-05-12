//fake data base
const registerContacts = [];
const Home = require("../models/homemodel");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);

  res.render("host/add-home", {
    currentPage: "add-home",
    pageTitle: "Add Home page || AIRBNB ",
  });
};

exports.postAddHome = (req, res, next) => {
  const { name, location, price, rating, image, bedrooms } = req.body;
  const home = new Home(name, price, location, rating, bedrooms, image);
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
    res.render("host/hostHome-list", {
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
