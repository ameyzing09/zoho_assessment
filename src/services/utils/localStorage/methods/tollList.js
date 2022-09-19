const tollListMethod = {
  addNewTollName: (tollObj) => {
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

  getTollListFromLs: () => {
    return JSON.parse(localStorage.getItem("tollList"));
  },
};

export default tollListMethod;
