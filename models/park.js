const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
};


Park.prototype.addDinosaurToCollection = function (species, diet, guestsAttractedPerDay) {
  this.dinosaurCollection.push(species, diet, guestsAttractedPerDay);
};


module.exports = Park;
