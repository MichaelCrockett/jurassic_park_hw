const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {


   dinosaur1 = new Dinosaur('stegosaurus', 'herbivore', 20);
   dinosaur2 = new Dinosaur('t-rex', 'carnivore', 95);
   dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 75);
   dinosaur4 = new Dinosaur('allosaurus', 'carnivore', 10);
   dinosaur5 = new Dinosaur('stegosaurus', 'herbivore', 15);





   park = new Park('Triassic Park', 10, [dinosaur1, dinosaur2, dinosaur4, dinosaur5])
 });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Triassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [...park.dinosaurCollection]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur4, dinosaur5, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
      park.removeDinosaur(dinosaur4);
      const actual = park.dinosaurCollection;
      assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur5]);
    });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findFavouriteDinosaur();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findAllDinosaursOfSameSpecies('stegosaurus');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur5]);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
