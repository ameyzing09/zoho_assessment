import React, { useState } from "react";

import Modal from "../services/modules/modals/modals";
import ModalHeader from "../services/modules/modals/modalHeader";
import ModalBody from "../services/modules/modals/modalBody";
import ModalFooter from "../services/modules/modals/modalFooter";
import AddVehicleType from "./AddVehicleType";

import tollListMethod from "../services/utils/localStorage/methods/tollList";

const AddTollEntry = ({ close }) => {
  const [submitted, setSubmitted] = useState(false);
  const [tollNameInput, setTollNameInput] = useState("");
  const [fareList, setFareList] = useState();
  const setFare = (fareObj) => {
    setFareList(fareObj)
  }

  const changeSubmitAfterChange = (bool) => setSubmitted(bool);

  const handleTollNameInput = (e) => {
    setTollNameInput(e.target.value);
  };
  const handleTollSubmit = () => {
    const tollEntryToAdd = { tollName: tollNameInput, fare: [...fareList] }
    tollListMethod.addNewTollName(tollEntryToAdd);
    setSubmitted(true)
    setTollNameInput("");
    setFare({});
  };

  return (
    <Modal>
      <ModalHeader>
        <h3>Add Toll Name</h3>
      </ModalHeader>
      <ModalBody>
        <div className='add-form'>
          <div className='entry-form'>
            <label htmlFor='toll-name'>Toll Name*</label>
            <input
              type='text'
              value={tollNameInput}
              placeholder='Enter Toll Name'
              className='select-option w20'
              id='toll-name'
              onChange={handleTollNameInput}
            />
          </div>
          <div className='entry-form'>
            <label htmlFor='vehicle-fare-details'>Vehicle Fare Details*</label>
            <div className=''>
              <AddVehicleType fareList={fareList} setFare={setFare} submitted={submitted} changeSubmitAfterChange={changeSubmitAfterChange} />
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className=''>
          <button onClick={close} className='btn btn-close'>
            Close
          </button>
        </div>
        <div>
          <input
            type='submit'
            onClick={handleTollSubmit}
            className='btn btn-primary'
          />
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default AddTollEntry;
