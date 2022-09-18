import React, { useEffect, useState } from "react";

import ModelRoot from "../services/modules/modals/modalRoot";
import ModelService from "../services/modules/modals/modalService";
import AddVehicleEntry from "./AddVehicleEntry";
import AddTollEntry from "./AddTollEntry";

import Header from "./Header";
import List from "./List";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  useEffect(() => {
    // get all list of all latest available vehicle list and set it to setVehicleList
  });
  const [tollList, setTollList] = useState();
  const [vehiclesList, setVehiclesList] = useState();
  const [searchVehicleQuery, setSearchVehicleQuery] = useState("");

  const openVehicleEntryForm = () => ModelService.open(AddVehicleEntry);
  const openTollEntryForm = () => ModelService.open(AddTollEntry);

  return (
    <>
      <div>
        <Header />
        <ModelRoot />
        <div className='header-items'>
          <SearchBar
            setSearchVehicleQuery={setSearchVehicleQuery}
            searchVehicleQuery={searchVehicleQuery}
            list={vehiclesList}
          />
          <div className='header-buttons'>
            <button className='btn-primary' onClick={openTollEntryForm}>
              Add new toll
            </button>
            <button className='btn-primary' onClick={openVehicleEntryForm}>
              Add vehicle entry
            </button>
            <button className='btn-primary'>View toll</button>
          </div>
        </div>
      </div>
      <div>
        <List query={searchVehicleQuery} list={vehiclesList} />
      </div>
    </>
  );
};

export default Dashboard;
