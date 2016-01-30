var expect = require('chai').expect;
var _ = require('lodash');

var Record = require('./record');
var RecordStore = require('./record_store');

describe('Record', function(){
  it('should have an artist, title and price', function(){
    var record1 = new Record('Rihanna', 'Anti', 8.99);

    expect(record1.artist).to.equal('Rihanna');
    expect(record1.title).to.equal('Anti');
    expect(record1.price).to.equal(8.99);
  });

  it('should have multiple different records', function(){
    var record1 = new Record('Rihanna', 'Anti', 8.99);
    var record2 = new Record('Michael Jackson', 'Thriller', 7.99);
    var record3 = new Record('Adele', '25', 9.99);

    expect(record1.artist).to.equal('Rihanna');
    expect(record2.artist).to.equal('Michael Jackson');
    expect(record3.artist).to.equal('Adele');
    expect
  });
});

describe('Record Store', function(){
    it('should have a name, its city and an inventory', function(){
      var store1 = new Store('Bass', 'Edinburgh');

      expect(store1.name).to.equal('Bass');
      expect(store1.city).to.equal('Edinburgh');
      expect(store1.inventory).to.exist
    });

    it('should be able to have multiple records in its inventory', function(){
      var record1 = new Record('Rihanna', 'Anti', 8.99);
      var record2 = new Record('Michael Jackson', 'Thriller', 7.99);
      var record3 = new Record('Adele', '25', 9.99);
      var store1 = new Store('Bass', 'Edinburgh');

      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);

      expect(store1.inventory[0].title).to.equal('Anti');
      expect(store1.inventory[1].title).to.equal('Thriller');
      expect(store1.inventory[2].title).to.equal('25');
    });

    it('should have a balance (cash in bank)', function(){
      var store1 = new Store('Bass', 'Edinburgh');
      expect(store1.balance).to.equal(0);

      store1.balance = 1000;
      expect(store1.balance).to.equal(1000);
    });

    it('should be able to list its inventory', function(){
      var record1 = new Record('Michael Jackson', 'Thriller', 7.99);
      var store1 = new Store('Bass', 'Edinburgh');

      store1.addRecord(record1);
      expect(store1.listInventory).to.equal('Item 1: Michael Jackson - Thriller, 7.99');
    });

    it("should be able to sell a record, removing it from its inventory and adding that record's price to the balance", function(){
      var record1 = new Record('Rihanna', 'Anti', 8.99);
      var record2 = new Record('Michael Jackson', 'Thriller', 7.99);
      var record3 = new Record('Adele', '25', 9.99);

      var store1 = new Store('Bass', 'Edinburgh');
      store1.balance = 1000;

      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);
      store1.sellRecord(record3);

      expect(store1.balance).to.equal(1009.99);
    });

    it('should be able to report its finances: balance and value of inventory', function(){
      var record1 = new Record('Rihanna', 'Anti', 8.99);
      var record2 = new Record('Michael Jackson', 'Thriller', 7.99);
      var record3 = new Record('Adele', '25', 9.99);

      var store1 = new Store('Bass', 'Edinburgh');
      store1.balance = 1000;

      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);

      expect(store1.finances).to.equal("Bass - Balance: 1000, Inventory Value: 26.97");
    });
});

describe('Record Collector', function(){
  it('should have a name, and a collection', function(){
    var recordCollector1 = new RecordCollector('Chris');

    expect(recordCollector1.name).to.equal('Chris');
    expect(recordCollector1.collection).to.be.empty;
    // What should this be? An array of variables of records?

  })
  it('should be able to buy a record', function(){
    var recordCollector1 = new RecordCollector('Chris');

    var record1 = new Record('Rihanna', 'Anti', 8.99);
    var record2 = new Record('Michael Jackson', 'Thriller', 7.99);
    var record3 = new Record('Adele', '25', 9.99);

    var store1 = new Store('Bass', 'Edinburgh');
    store1.balance = 1000;

    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);

    recordCollector1.buy(store1, record1);
  });

  it('should be able to sell a record', function(){
    var record1 = new Record('Rihanna', 'Anti', 8.99);
    var record2 = new Record('Michael Jackson', 'Thriller', 7.99);
    var record3 = new Record('Adele', '25', 9.99);

    var recordCollector1 = new RecordCollector('Chris');
    recordCollector1.collection = [{record1}];

    var store1 = new Store('Bass', 'Edinburgh');
    store1.balance = 1000;

    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);

    recordCollector1.sell(store1, record1);
  });
});