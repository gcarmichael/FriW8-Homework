var _ = require('lodash');

var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

Store.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  sellRecord: function(record){
    _.remove(this.inventory,record);
    this.balance += record.price;
  },
  listInventory: function(){
    var result = "";
    for(var i = 0; i < this.inventory.length; i+= 1) {
      result += ("Record " + [i+1] + ": " + this.inventory[i].artist + " - " + this.inventory[i].title + ", " + this.inventory[i].price + "\n");
    }
    return result;
  },
  finances: function(){
    total = 0
    for(record of this.inventory){
      total += record.price
    }
    return this.name + " - Balance: " + this.balance + ", Inventory Value: " + total + "\nTotal: " + (this.balance+total);
  }
};

module.exports = Store;