var _ = require('lodash');

var Collector = function(name){
  this.name = name;
  this.collection = [];
};

Collector.prototype = {
  buy: function(store, record){
    this.collection.push(record);
    store.sellRecord(record);
  },
  sell: function(store, record){
    _.remove(this.collection,record);
    store.addRecord(record);
  }
}

module.exports = Collector;