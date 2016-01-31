var _ = require('lodash');

var Collector = function(name){
  this.name = name;
  this.collection = [];
};

module.exports = Collector;