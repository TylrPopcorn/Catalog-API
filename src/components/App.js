import React, { useEffect, useState } from "react";

import functions from "./App-model"; //Helper functions that support the overall app function
//import {createLabel, getResponse,} from "./App-model"; //helper functions
//------------------
function App() {
  const [data, setData] = useState({});

  //function that will run after first mount:
  useEffect(() => {
    console.log("UseEffect - running");
    const randomTime = Math.floor(Math.random() * 1000) + 1000; //Loading effect.

    setTimeout(async () => {
      //Attempt to get any current hats in the database:
      let CURRENT_hats = await functions.getResponse(
        "http://localhost:9000/api/hats/"
      );

      if (Object.keys(CURRENT_hats).length <= 0) {
        //IF there are no hats in the database, import some starters.
        const IMPORTED_hats = await functions.getResponse(
          "http://localhost:9000/api/hats/imports"
        );
      } else {
        setData(CURRENT_hats);
      }
    }, randomTime);
  }, []);

  return (
    <div className="App">
      {/* TITLE */}
      <h2 className="title"> CATALOG API </h2>

      {/* API LINK */}
      <a
        className="link"
        href="https://catalog.roblox.com/v1/search/items/details?Category=11&SortType=3&Limit=10"
        title="view and verify incoming data"
      >
        https://catalog.roblox.com/v1/search/items/details?Category=11&SortType=3&Limit=10
      </a>

      {/* LIST CONTAINER */}
      <div className="list-container">
        <li>
          {/* ------------------------------------------- */}
          {Object.keys(data).length > 0
            ? //WE NEED TO FIGURE OUT A WAY TO SHARE DATA FROM ARRAYS OR OBJECTS IN THE state data.
              (console.log("sdghnfder"), functions.createLabel(data))
            : (console.log("NO DATA"),
              (<p className="loading-container"> Loading... </p>))}
          {/* <div className="item-container">
            <div className="itm-img-section">
              <img
                className="item-thumbnail"
                alt=""
                src="https://cdn.discordapp.com/attachments/548209804825460760/1064417656125542400/Screenshot_2023-01-16_at_12.34.58_AM.png"
              />
              <p className="item-id"> 1234567890 </p>
            </div>
            <p className="item-name"> TEST TEXT AAAAAAAAAAAA</p>
          </div>
          {/* 
          <div className="item-container">
            <div className="itm-img-section">
              <img
                className="item-thumbnail"
                alt=""
                src="https://cdn.discordapp.com/attachments/548209804825460760/1064417656125542400/Screenshot_2023-01-16_at_12.34.58_AM.png"
              />
              <p className="item-id"> ID </p>
            </div>
            <p className="item-name"> TEST TEXT </p>
          </div> */}
          {/* ------------------------------------------- */}
        </li>
      </div>
    </div>
  );
}
//------------

export default App;
