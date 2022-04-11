function Util() {
  const calculateTotalDistributedPassengers = (
    distributedPassengers
  ) => {
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

  return {
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
  };
}

module.exports = Util();
