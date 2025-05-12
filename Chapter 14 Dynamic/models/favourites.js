const fs = require('fs')
const path = require('path')

const rootDir = require('../utilities/rootDir')

const favhomedatapath = path.join(rootDir, "data", "favhomes.json");

module.exports = class Favourites {
  static addFavourites (homeId){
    this.getFavourites ((favourites)=>{
      if(favourites.includes(homeId)){
        console.log("Home all ready added");
      } else{
        favourites.push(homeId);
      
        fs.writeFile(favhomedatapath , JSON.stringify(favourites), (err)=>{
          console.log('file read concluded', err);
        })
      }
    })
  }

static getFavourites(callback){
  fs.readFile(favhomedatapath , (err, data)=>{
    callback(!err ? JSON.parse(data): []);
   
  } )
}


}