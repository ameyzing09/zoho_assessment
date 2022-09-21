import React, { useState, useEffect } from "react";

const AddVehicleType = ({ setFare, submitted, changeSubmitAfterChange }) => {
  let indexOfList = 0;
  const [error, setError] = useState();
  const [vehicleTypesOptions] = useState([
    {
      name: "Car/Jeep/Van",
    },
    {
      name: "LCV",
    },
    {
      name: "Truck/Bus",
    },
    {
      name: "Heavy Vehicle",
    },
  ]);
  const [selectedVehicleTypeList, setSelectedVehicleTypeList] = useState([]);
  const [vehicleTypeList, setVehicleList] = useState([
    { vehicleType: "", singleJourneyFare: "", returnJourneyFare: "" },
  ]);
  useEffect(() => {
    if (submitted) {
      setVehicleList([
        { vehicleType: "", singleJourneyFare: "", returnJourneyFare: "" },
      ]);
      setSelectedVehicleTypeList([]);
      console.log("Vehicle List : ", vehicleTypeList);
      console.log("Selected vehicle list : ", selectedVehicleTypeList);
      changeSubmitAfterChange(!submitted);
    }
  }, [
    vehicleTypeList,
    selectedVehicleTypeList,
    submitted,
    changeSubmitAfterChange,
  ]);

  const handleVehicleTypeSelector = (e, i) => {
    const { name, value } = e.target;
    const list = [...vehicleTypeList];
    list[i][name] = value;
    setVehicleList(list);
  };
  const handleOnChangeSjourneyFare = (e, i) => {
    const { name, value } = e.target;
    if (!isNaN(value)) {
      const list = [...vehicleTypeList];
      list[i][name] = value;
      setVehicleList(list);
    } else setError("Please enter a number");
  };
  const handleOnChangeRjourneyFare = (e, i) => {
    const { name, value } = e.target;
    const list = [...vehicleTypeList];
    list[i][name] = value;
    setVehicleList(list);
  };
  const handleOnSubmitVehicleType = (e, i) => {
    e.preventDefault();
    let err = {};
    const {
      vehicleType: vt,
      singleJourneyFare,
      returnJourneyFare,
    } = vehicleTypeList[i];
    setSelectedVehicleTypeList([
      ...selectedVehicleTypeList,
      vehicleTypeList[i].vehicleType,
    ]);
    if (vehicleTypeList) {
      setFare([...vehicleTypeList]);
    }
    if (!vt) err.vehicleType = "Please select type";
    if (!singleJourneyFare)
      err.singleJourneyFare = "Please enter single journey fare";
    if (!returnJourneyFare)
      err.returnJourneyFare = "Please enter return journey fare";
    setError(err);
    if (
      vehicleTypeList.length < vehicleTypesOptions.length &&
      vehicleTypeList[i].vehicleType &&
      vehicleTypeList[i].returnJourneyFare &&
      vehicleTypeList[i].singleJourneyFare
    ) {
      setVehicleList([
        ...vehicleTypeList,
        { vehicleType: "", singleJourneyFare: "", returnJourneyFare: "" },
      ]);
      setError();
    }
  };
  const handleOnRemoveVehicleType = (e) => {
    e.preventDefault();
    const list = [...vehicleTypeList];
    const list2 = [...selectedVehicleTypeList];
    list2.splice(e, 1);
    list.splice(e, 1);
    setVehicleList(list);
    setFare(list);
    setSelectedVehicleTypeList(list2);
  };
  return (
    <div>
      {vehicleTypeList.map((vt, index1) => {
        indexOfList = index1;
        return (
          <div
            key={index1}
            id='vehicle-fare-details'
            className='fare-details-form'
          >
            <select
              className='select-option'
              value={vt.vehicleType}
              onChange={(e) => handleVehicleTypeSelector(e, index1)}
              name='vehicleType'
              //   style={error && { border: "solid 1px red" }}
            >
              <option defaultValue value='false'>
                {vt.vehicleType || "Select Vehicle Type"}
              </option>
              {vehicleTypesOptions
                .filter(
                  (vehicleTypesOption) =>
                    !selectedVehicleTypeList.includes(vehicleTypesOption.name)
                )
                .map((vehicleTypesOption, index2) => {
                  return (
                    <option key={index2} value={vehicleTypesOption.name}>
                      {vehicleTypesOption.name}
                    </option>
                  );
                })}
            </select>
            <input
              type='text'
              placeholder='Single Journey'
              value={vt.singleJourneyFare}
              className='select-option'
              name='singleJourneyFare'
              onChange={(e) => handleOnChangeSjourneyFare(e, index1)}
              //   style={error && { border: "solid 1px red" }}
            />
            <input
              type='text'
              placeholder='Return Journey'
              value={vt.returnJourneyFare}
              className='select-option'
              name='returnJourneyFare'
              onChange={(e) => handleOnChangeRjourneyFare(e, index1)}
              //   style={error && { border: "solid 1px red" }}
            />
            {vehicleTypeList.length > 1 && (
              <button
                onClick={handleOnRemoveVehicleType}
                className='btn btn-close'
              >
                Remove
              </button>
            )}
          </div>
        );
      })}
      {/* {error && <p className="error-message">{error}</p>} */}
      <button
        onClick={(e) => handleOnSubmitVehicleType(e, indexOfList)}
        className='btn btn-primary'
      >
        Add
      </button>
    </div>
  );
};

export default AddVehicleType;
