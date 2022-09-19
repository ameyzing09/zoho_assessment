/**
 * {
 *      vehicleType: "car/jeep/van"
 *      vehicleNumber: "MH12QB5714",
 *      tollName: "Pune",
 *      time: date.now(),
 *      fare: Number
 * }
 */

const vehicleEntryMethod = {
  addVehicleEntryInLs: (vehicleEntry) => {
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

  getVehicleListFromLs: () => {
    return JSON.parse(localStorage.getItem("vehicleEntry"));
  },
};

export default vehicleEntryMethod;
