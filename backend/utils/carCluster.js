// cluster types: 0 - economic, 1 - standard, 2 - premium, 3 - large family cars

// marki premium
const premiumMakes = ["bmw", "mercedes", "audi", "lexus", "porsche", "jaguar", "land rover"];

function specifyCarCluster(make, year, mileage, hourlyPrice, capacity) {
  const currentYear = new Date().getFullYear();
  if (capacity >= 6) {
    return 3; // large family cars
  } else if (
    make &&
    premiumMakes.includes(make.toLowerCase()) &&
    year >= (currentYear - 5) &&
    mileage <= 150000 &&
    hourlyPrice > 40
  ) {
    return 2; // premium
  } else if (
    year >= (currentYear - 8) &&
    mileage <= 250000 &&
    hourlyPrice > 25
  ) {
    return 1; // standard
  } else {
    return 0; // economic
  }
}

function determineRecommendedCarCluster(make, minYear, maxMileage, maxPrice, minCapacity) {
  const currentYear = new Date().getFullYear();
  if (minCapacity >= 6) {
    return 3; // large family cars
  } else if (
    premiumMakes.includes(make.toLowerCase()) &&
    maxPrice > 40 &&
    minYear >= (currentYear - 5) &&
    maxMileage <= 150000
  ) {
    return 2; // premium
  } else if (
    maxPrice > 25 &&
    minYear >= (currentYear - 8) &&
    maxMileage <= 250000
  ) {
    return 1; // standard
  } else {
    return 0; // economic
  }
}

export { specifyCarCluster, determineRecommendedCarCluster };