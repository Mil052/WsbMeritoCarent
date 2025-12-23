// cluster types: 0 - economic, 1 - standard, 2 - premium

// marki premium
const premiumMakes = ["bmw", "mercedes", "audi", "lexus", "porsche", "jaguar", "land rover"];

function specifyCarCluster(make, year, mileage, hourlyPrice) {
  const currentYear = new Date().getFullYear();
  if (
    premiumMakes.includes(make.toLowerCase()) &&
    year >= (currentYear - 5) &&
    mileage <= 150000 &&
    hourlyPrice > 35
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

function determineRecommendedCarCluster(make, minYear, maxMileage, maxPrice) {
  const currentYear = new Date().getFullYear();
  if (
    premiumMakes.includes(make.toLowerCase()) &&
    maxPrice > 35 &&
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