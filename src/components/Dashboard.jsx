import React, { useState } from "react";
import Add from "./Add";
import Header from "./Header";
import List from "./List";

const Dashboard = () => {
  const [vehiclesList, setVehiclesList] = useState();
  const [isToll, setIsToll] = useState(false);
  const [isVehicle, setIsVehicle] = useState(false);


  return (
    <div>
      {!isToll && !isVehicle && (
        <>
          <Header  />
          <List list={vehiclesList} />
        </>
      )}
      {isToll && <Add setIsToll={setIsToll} />}
      {isVehicle && <Add setIsVehicle={setIsVehicle} />}
    </div>
  );
};

export default Dashboard;
