import React, { useState } from "react";
let header = [
  {
    key: "vehicleType",
    value: "Vehicle Type",
  },
  {
    key: "vehicleNumber",
    value: "Vehicle Number",
  },
  {
    key: "dateTime",
    value: "Date/Time",
  },
  {
    key: "tollName",
    value: "Toll Name",
  },
  {
    key: "Tariff",
    value: "Tariff",
  },
];
const List = ({ query, list }) => {
  const [tableContent, setTableContent] = useState([]);
  console.log("Table content ; ", tableContent);
  let filteredList;
  let noList = list?.length <= 0;
  if (!noList) {
    noList = false;
    filteredList = list.filter((entry) => {
      if (query === "") {
        return entry;
      } else {
        return entry.vehicleNumber.toLowerCase().includes(query);
      }
    });
    setTableContent(filteredList);
  }
  // header = Object.values(header);
  return (
    <table className='list-container'>
      <thead>
        <tr>
          {header.map((heading, index) => (
            <th className='list-heading' key={index}>
              {heading.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!noList ? (
          tableContent.map((val, key) => {
            const keysFromList = Object.keys(val);
            return (
              <tr key={key}>
                {keysFromList.map((k, i) => {
                  if (val[k] === "vehicleTime") {
                    val[k] = val[k].toLocaleString();
                  }
                  <td key={i}>{val[k]}</td>;
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td className='error-message'>No data found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default List;
