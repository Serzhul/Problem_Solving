const ParkingSystem = function (big, medium, small) {
  this.counts = [null, big, medium, small];
};

ParkingSystem.prototype.addCar = function (carType) {
  if (this.counts[carType]) {
    this.counts[carType] -= 1;
    return true;
  }
  return false;
};
