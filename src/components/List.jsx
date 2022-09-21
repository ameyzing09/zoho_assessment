import React from 'react'



const List = ({ query ,list, header }) => { // list variable will be a object iterate using .reduce
  const filteredList = list.fitler(entry => {
    if(query === '') {
      return entry
    } else {
      return entry.vehicleNumber.toLowerCase().includes(query);
    }
  })
  header = Object.values(header);
  return (
    <table>
      <thead>
      <tr className=''>
            {header.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
      </thead>
      <tbody>
          
      </tbody>
    </table>
  )
}
export default List