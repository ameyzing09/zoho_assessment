import React, { useEffect, useState } from "react";

import ModelRoot from "../services/modules/modals/modalRoot";
import ModelService from "../services/modules/modals/modalService";
import AddVehicleEntry from "./AddVehicleEntry";
import AddTollEntry from "./AddTollEntry";
import Header from "./Header";
import List from "./List";
import SearchBar from "./SearchBar";

import vehicleEntryHeaderMethod from "../services/utils/localStorage/methods/vehicleEntryHeader";
import vehicleEntryMethod from "../services/utils/localStorage/methods/vehicleEntry";

const Dashboard = () => {
  const [tollList, setTollList] = useState();
  const [vehiclesList, setVehiclesList] = useState([]);
  // const [vehicleListHeader, setVehicleListHeader] = useState({});
  const [searchVehicleQuery, setSearchVehicleQuery] = useState("");

  useEffect(() => {
    // get all list of all latest available vehicle list and set it to setVehicleList
    setVehiclesList(vehicleEntryMethod.getVehicleListFromLs)
  }, [searchVehicleQuery]);

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
            <button className='btn btn-primary' onClick={openTollEntryForm}>
              Add new toll
            </button>
            <button className='btn btn-primary' onClick={openVehicleEntryForm}>
              Add vehicle entry
            </button>
            <button className='btn btn-primary'>View toll</button>
          </div>
        </div>
      </div>
      <div>
        {/* <List
          query={searchVehicleQuery}
          list={vehiclesList}
          header={vehicleEntryHeaderMethod.getVehicleListEntryHeadersFromLs}
        /> */}
      </div>
    </>
  );
};

export default Dashboard;
