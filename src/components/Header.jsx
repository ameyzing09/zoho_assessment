import React from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className='container'>
      {/* <h2>Toll Management Application</h2> */}
      <div className='header-items'>
        <div className='search-bar-container'>
          <h3>Toll Entries / Vehicle List</h3>
          <div className='vertical-line'></div>
          <button className='filter-list'>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <input id='search-box' type='text' placeholder='Search Vehicle' />
        </div>
        <div className="header-buttons">
          <button className='btn-primary'>Add new toll</button>
          <button className='btn-primary'>Add vehicle entry</button>
          <button className='btn-primary'>View toll</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
