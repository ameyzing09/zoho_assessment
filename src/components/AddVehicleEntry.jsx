import React, { useState } from 'react'
import Modal from '../services/modules/modals/modals'
import ModalHeader from '../services/modules/modals/modalHeader'
import ModalBody from '../services/modules/modals/modalBody'
import ModalFooter from '../services/modules/modals/modalFooter'

const AddVehicleEntry = ({close}) => {
const [ addVehicleEntry, setAddVehicleEntry ] = useState({}) // localStorage

  return (
    <Modal>
      <ModalHeader>
        <h3>Add Vehicle Entry</h3>
      </ModalHeader>
      <ModalBody>
        <select name="Toll Gate" id="">
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="nagpur">Nagpur</option>
        </select>
      </ModalBody>
      <ModalFooter>
        <button onClick={close} className="btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  )
}

export default AddVehicleEntry