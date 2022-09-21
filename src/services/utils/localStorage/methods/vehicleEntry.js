/**
 * {
 *      vehicleType: "car/jeep/van"
 *      vehicleNumber: "MH12QB5714",
 *      tollName: "Pune",
 *      vehicleTime: date.now(),
 *      fare: Number
 * }
 */

import tollListMethod from "./tollList";

const vehicleEntryMethod = {
  addVehicleEntryInLs: (vehicleEntry) => {
    vehicleEntry.vehicleTime = Date.now();
    const vehicleEntries = JSON.parse(localStorage.getItem("vehicleEntry"));
    if (!vehicleEntries) {
      localStorage.setItem("vehicleEntry", JSON.stringify([vehicleEntry]));
      // return JSON.parse(localStorage.getItem('vehicleEntry'))
      return;
    }
    localStorage.setItem(
      "vehicleEntry",
      JSON.stringify([...vehicleEntries, vehicleEntry])
    );
  },

  getVehicleEntryTariffFromLs: ({ tollName, vehicleType, vehicleNumber }) => {
    console.log('params : ', tollName, vehicleType, vehicleNumber)
    const ONE_HOUR = 3600 * 1000;
    const vehicleEntries = JSON.parse(localStorage.getItem("vehicleEntry"));
    console.log('vehiclesEnteries : ', vehicleEntries)
    if (vehicleEntries) {
      const foundVehicleEntry = vehicleEntries.find(
        (vehicleEntry) => vehicleEntry.vehicleNumber === vehicleNumber
      );
      console.log('foundVehicleEntry : ', foundVehicleEntry)
      if (foundVehicleEntry) {
        const tollFare = tollListMethod.getTollFare(foundVehicleEntry);
        if (foundVehicleEntry.vehicleTime > Date.now() - ONE_HOUR) {
          return tollFare.singleJourneyFare;
        }
        return tollFare.returnJourneyFare;
      }
    }
  },

  getVehicleListFromLs: () => {
    return JSON.parse(localStorage.getItem("vehicleEntry"));
  },
};

export default vehicleEntryMethod;
