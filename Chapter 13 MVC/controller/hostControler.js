
const Home = require("../models/home")



exports.getAddHome = (req, res, next) => {

  console.log(req.url, req.method);
  res.render('host/add-home', { pageTitle: 'Addhome', currentPage: 'addhome' });
};


exports.getHostHomes = (req,res,next)=>{

    res.render('host/host-home-list', {
      registerHomes : registerHomes,
      pageTitle : 'Host Home List',
      currentPage: 'host-homes'
    } )
  
}


exports.postAddHome = (req, res, next) => {

  const { name, price, location, image } = req.body

  const home = new Home( name, price, location, image);

  home.save();
  res.render('host/home-succeses', { pageTitle: 'Home added Succsess', currentPage: 'home-succeses' });
};



exports.page404 = (req, res, next) => {
  console.log(req.url, req.method)
  res.render('404', { pageTitle: "Page not Found", currentPage: '404' })
}