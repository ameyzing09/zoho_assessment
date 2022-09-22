import React, { useState } from "react";
import Modal from "../services/modules/modals/modals";
import ModalHeader from "../services/modules/modals/modalHeader";
import ModalBody from "../services/modules/modals/modalBody";
import ModalFooter from "../services/modules/modals/modalFooter";

import vehicleEntryMethod from "../services/utils/localStorage/methods/vehicleEntry";
import tollListMethod from "../services/utils/localStorage/methods/tollList";

const AddVehicleEntry = ({ close }) => {
  const [addVehicleEntry, setAddVehicleEntry] = useState({
    vehicleType: "",
    vehicleNumber: "",
    vehicleTime: "",
    tollName: "",
    fare: ""
  }); // localStorage
  const [tariffRate, setTariffRate] = useState("");

  const handleVehicleSubmit = (e) => {
    e.preventDefault();
    if(addVehicleEntry.vehicleType && addVehicleEntry.tollName && addVehicleEntry.vehicleNumber) {
      addVehicleEntry.fare = tariffRate;
      vehicleEntryMethod.addVehicleEntryInLs(addVehicleEntry);
      console.log('addEntryVehicle : ', addVehicleEntry)
      setAddVehicleEntry({
        vehicleType: "",
        vehicleNumber: "",
        vehicleTime: "",
        tollName: "",
        fare: ""
      })
    } else {
      console.error("Cannot add vehicle entry as something is missing ")
    }
  };
  const handleVehicleInputChange = (e) => {
    const { name, value } = e.target;
    setAddVehicleEntry({ ...addVehicleEntry, [name]: value });
    if(addVehicleEntry.vehicleType && addVehicleEntry.vehicleNumber) {
      setTariffRate(vehicleEntryMethod.getVehicleEntryTariffFromLs(addVehicleEntry))
    }
  };

  const availableTollList = tollListMethod.getTollListFromLs();

  return (
    <Modal>
      <ModalHeader>
        <h3>Add Vehicle Entry</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleVehicleSubmit} className='add-form'>
          <div className='entry-form'>
            <label htmlFor='toll-name-select'>Select Toll Name*</label>
            <select
              id='toll-name-select'
              className='select-option w20'
              value={addVehicleEntry.tollName || "Select Toll Name"}
              onChange={handleVehicleInputChange}
              name='tollName'
            >
            <option value='false' defaultValue>{addVehicleEntry.vehicleType || "Select Toll Name"}</option>
              {availableTollList &&
                availableTollList.map((toll, i) => {
                  return <option key={i} value={toll.tollName}>{toll.tollName}</option>;
                })}
            </select>
          </div>
          <div className='entry-form'>
            <label htmlFor='vehicle-type-select'>Select Vehicle Type*</label>
            <select
              id='vehicle-type-select'
              className='select-option w20'
              value={addVehicleEntry.vehicleType || "Select Vehicle Type"}
              onChange={handleVehicleInputChange}
              name='vehicleType'
            >
              <option value='false' defaultValue>
              {addVehicleEntry.vehicleType || "Select Vehicle Type"}
              </option>
              <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
              <option value='LCV'>LCV</option>
              <option value='Truck/Bus'>Truck/Bus</option>
              <option value='Heavy Vehicle'>Heavy Vehicle</option>
            </select>
          </div>
          <div className='entry-form'>
            <label htmlFor='vehicle-number-text'>Vehicle Number*</label>
            <input
              id='vehicle-number-text'
              className='select-option w20'
              value={addVehicleEntry.vehicleNumber}
              onChange={handleVehicleInputChange}
              type='text'
              name='vehicleNumber'
              placeholder='Enter vehicle number'
              required
            />
          </div>
          <div className='entry-form'>
            <label htmlFor='vehicle-tariff'>Tariff*</label>
            <input
              id='vehicle-tariff'
              className='select-option w20'
              value={tariffRate}
              type='text'
              name='fare'
              placeholder='Tariff'
              disabled
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <div className="">
          <button onClick={close} className='btn btn-close'>
            Close
          </button>
        </div>
        <div>
          <input type='submit' onClick={handleVehicleSubmit} className='btn btn-primary' />
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default AddVehicleEntry;
