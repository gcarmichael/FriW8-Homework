var _ = require('lodash');

var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

module.exports = Record;