import { reactive, ref } from "vue";
import type { CarPreferences } from "@/utilities/models/carModel";

const preferences: CarPreferences = reactive({
  carMaker: "",
  bodyType: [],
  minCapacity: 4,
  maxPrice: 30,
  fuelType: 'Benzyna',
  gearboxType: 'Manualna',
  minYear: 2020,
  maxMileage: 200000,
});

// If there is no user, default recommended cluster is number 0 
const recommendedCarsCluster = ref(0);

function setCarPreferences (newPreferences: Partial<CarPreferences>) {
  if (newPreferences.carMaker !== undefined ) preferences.carMaker = newPreferences.carMaker;
  if (newPreferences.bodyType) preferences.bodyType = newPreferences.bodyType;
  if (newPreferences.minCapacity) preferences.minCapacity = newPreferences.minCapacity;
  if (newPreferences.maxPrice) preferences.maxPrice = newPreferences.maxPrice;
  if (newPreferences.fuelType !== undefined) preferences.fuelType = newPreferences.fuelType;
  if (newPreferences.gearboxType) preferences.gearboxType = newPreferences.gearboxType;
  if (newPreferences.minYear) preferences.minYear = newPreferences.minYear;
  if (newPreferences.maxMileage) preferences.maxMileage = newPreferences.maxMileage;
}

function setRecommendedCarsCluster(cluster: number) {
  recommendedCarsCluster.value = cluster;
}

async function determineRecommendedCarsCluster (newPreferences: Pick<CarPreferences, "carMaker" | "maxPrice" | "minYear" | "maxMileage" | "minCapacity"> ) {
  const response = await fetch(import.meta.env.VITE_API_COMPUTE_RECOMMENDATION, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPreferences),
    credentials: 'include'
  });
  if (!response.ok) {
    throw new Error('Nie udało się ustalić rekomendowanej grupy samochodów!');
  }
  const responseData = await response.json();
  recommendedCarsCluster.value = responseData.predicted_cluster;
  console.log("Recommended cluster: ", recommendedCarsCluster.value);
  return responseData.predicted_cluster as number;
}

export default function useCarPreferences() {
  return {
    preferences,
    recommendedCarsCluster,
    setCarPreferences,
    setRecommendedCarsCluster,
    determineRecommendedCarsCluster
  };
}