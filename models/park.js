const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
};


Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  for (const currentDinosaur of this.dinosaurCollection) {
    let i = 0;
    if (currentDinosaur === dinosaur) {
      this.dinosaurCollection.splice(i, 1);
      i++
    };
  };
};

Park.prototype.findFavouriteDinosaur = function () {
  let favouriteDinosaur = this.dinosaurCollection[0];
  for (const currentDinosaur of this.dinosaurCollection) {
    if (currentDinosaur.guestsAttractedPerDay > favouriteDinosaur.guestsAttractedPerDay) {
      favouriteDinosaur = currentDinosaur;
    };
  };
  return favouriteDinosaur
};

Park.prototype.findAllDinosaursOfSameSpecies = function (species) {
  let newDinosaurArray = [];
  for (const currentDinosaur of this.dinosaurCollection) {
    if (currentDinosaur.species === species) {
      newDinosaurArray.push(currentDinosaur);
    };
  };
  return newDinosaurArray;
};




module.exports = Park;
