import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(props) {
  const handleSearchVehicle = (e) => {
    props.setSearchVehicleQuery(e.target.value);
  };
  return (
      <div className='search-bar-container'>
        <h3>Toll Entries / Vehicle List</h3>
        <div className='vertical-line'></div>
        <button className='filter-list'>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <input
          id='search-box'
          type='text'
          placeholder='Search Vehicle'
          onChange={handleSearchVehicle}
        />
      </div>
  );
}
