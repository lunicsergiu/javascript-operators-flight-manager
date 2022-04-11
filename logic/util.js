"use strict";
function Util() {
  const calculateTotalDistributedPassengers = (distributedPassengers) => {
    let totalDistributedPassengers = 0;
    let value;
    for (value in distributedPassengers) {
      totalDistributedPassengers += distributedPassengers[value];
    }
    return totalDistributedPassengers;
  };

  const calculateTotalNumberOfPassengers = (passengersArray) => {
    let totalNumberOfPassengers = 0;
    for (let passengers of passengersArray) {
      totalNumberOfPassengers += passengers;
    }
    return totalNumberOfPassengers;
  };

  const checkInput = (input) => {
    if (!input) {
      throw new Error(
        "Incorrect values. Check all input fields to be filled in."
      );
    }
    if (isNaN(input)) {
      throw new Error(
        "Incorrect values. Check all input fields to be numbers."
      );
    }
  };

  const calculateTotalDistance = (arrayOfDistances) => {
    let totalDistance = 0;
    for (const distance of arrayOfDistances) {
      if (distance >= 0) {
        totalDistance += distance;
      }
    }
    return totalDistance;
  };

  const calculateBonusPoints = (
    businessDistancesArray,
    economyDistancesArray,
    businessBonus,
    economyBonus
  ) => {
    let totalBusinessDistance = calculateTotalDistance(businessDistancesArray);
    let totalEconomyDistance = calculateTotalDistance(economyDistancesArray);
    let points = (businessBonus * totalBusinessDistance)/100 + (economyBonus * totalEconomyDistance)/100;
    return points;
  };

  return {
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
    checkInput,
    calculateTotalDistance,
    calculateBonusPoints,
  };
}

module.exports = Util();
