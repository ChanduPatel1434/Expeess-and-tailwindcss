//core modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utilities/rootDir");

module.exports = class Home {
  constructor(name, location, price, rating, bedrooms, image) {
      this.homename = name,
      this.location = location,
      this.price = price,
      this.rating = rating,
      his.bedrooms = bedrooms;
      this.image = image;
      this.id = id
  }

  save() {
    Home.fetchAll((registerHomes) => {
      console.log(registerHomes, this);
      if (this.id) {
        registerHomes = registerHomes.map((home) => {
          console.log(home.id, this.id);
          if (home.id === this.id) {
            return this;
          }
          return home;
        });
      } else {
        console.log(" New Home");
        this.id = Math.random().toString();
        registerHomes.push(this);
      }
      const homedatapath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homedatapath, JSON.stringify(registerHomes), (err) => {
        console.log("homejson file write concluded", err);
      });
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((home) => {
      const homeFound = home.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static fetchAll(callback) {
    const homedatapath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homedatapath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
