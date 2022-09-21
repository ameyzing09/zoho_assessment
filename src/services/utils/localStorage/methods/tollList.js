const tollListMethod = {
  addNewTollName: async (tollObj) => {
    const existingTollList = JSON.parse(localStorage.getItem("tollList"));
    if (!existingTollList) {
      localStorage.setItem("tollList", JSON.stringify([tollObj]));
      // return JSON.parse(localStorage.getItem('vehicleEntry'))
      return;
    }
    localStorage.setItem(
      "tollList",
      JSON.stringify([...existingTollList, tollObj])
    );
  },

  getTollFare: ({ vehicleType, tollName }) => {
      const tollList = JSON.parse(localStorage.getItem("tollList"));
      const foundToll = tollList.find(toll => toll.tollName === tollName)
      console.log("found Toll : ", foundToll);
      const tollFareDetails = foundToll.fare.find(f => f.vehicleType === vehicleType)
      console.log("tollFareDetails : ", tollFareDetails);
      return tollFareDetails
  },

  getTollListFromLs: () => {
    return JSON.parse(localStorage.getItem("tollList"));
  },
};

export default tollListMethod;
