
 const tollListHeaderMethod = {  
    getTollListHeadersFromLs: () => {
      return JSON.parse(localStorage.getItem("tollListHeader"));
    },
  };
  
  export default tollListHeaderMethod;
  