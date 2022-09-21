/**
 * {
 *      vehicleType: "car/jeep/van"
 *      vehicleNumber: "MH12QB5714",
 *      tollName: "Pune",
 *      time: date.now(),
 *      fare: Number
 * }
 */

 const vehicleEntryHeaderMethod = {  
    getVehicleListEntryHeadersFromLs: () => {
      return JSON.parse(localStorage.getItem("vehicleEntryHeader"));
    },
  };
  
  export default vehicleEntryHeaderMethod;
  