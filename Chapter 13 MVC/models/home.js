//core modules
const path = require('path')
const fs = require("fs")

//local module
const rootDir = require('../utilities/path');


 


module.exports = class Home {

  constructor(name, location, price,image){
    this.name = name,
    this.location = location,
    this.price = price,
    this.image = image

  }


}
