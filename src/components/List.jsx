import React from 'react'

const List = ({ query ,list }) => { // list variable will be a object iterate using .reduce


  const data = [
    {
          vehicleType : "Jeep",
          VehicleNo : "TN24Aq4644",
          datetime : "16-10-2019 ",15:30,
          tollname:"Pune",
          tarrif : 60
  
      },
      {
          vehicleType : "LCV",
          VehicleNo : "MH24Ap4644 ",
          datetime : "02-03-2021" ,17:30,
          tollname:"Mumbai",
          tarrif : 250
  
      },
      {
          
          vehicleType : "Truck",
          VehicleNo : "MH12cq2011",
          datetime : "16-10-2022 " ,18:30,
          tollname:"Pune",
          tarrif : 250
  
      },
      {
          vehicleType : "Van",
          VehicleNo :"TN24Aq4644",
          datetime :  "16-08-2022" ,15:30,
          tollname:"Nagpur",
          tarrif : 150
  
      },
      {
          vehicleType : "Heavy vehicle",
          VehicleNo : "MH24LN2144",
          datetime : "15-09-2022 ", 15:30,
          tollname:"Pune",
          tarrif : 350
  
      }
  ]
  
  return (
    <div className="App">
    <table>
      <tr>
        <th>VEHICLE TYPE</th>
        <th>VEHICLE NUMBER</th>
        <th>DATE/TIME</th>
        <th>TOLL NAME</th>
        <th>TARRIF</th>
      </tr>
      {data.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.vehicleType}</td>
            <td>{val.VehicleNo}</td>
            <td>{val.datetime}</td>
            <td>{val.tollname}</td>
            <td>{val.tarrif}</td>
          </tr>
        )
      })}
    </table>
  </div>
  )
}
export default List