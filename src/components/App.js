import React, { useEffect, useState } from "react";

const functions = {};
//------------------
function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:9000/api/hats/");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();

    // axios
    //   .get("http://localhost:9000/api/hats/imports")
    //   .then((res) => {
    //     console.log(res, " /n <-- DATA");
    //   })
    //   .catch((err) => {
    //     console.log("Error");
    //   });
  }, []);

  return (
    <div className="App">
      <h2 className="title"> CATALOG API </h2>
      <a
        className="link"
        href="https://catalog.roblox.com/v1/search/items/details?Category=11&SortType=3&Limit=10"
        title="view and verify incoming data"
      >
        https://catalog.roblox.com/v1/search/items/details?Category=11&SortType=3&Limit=10
      </a>

      <div className="list-container">
        <li>
          {/* ------------------------------------------- */}
          {data.length > 0 ? (
            functions.createLabels()
          ) : (
            <p className="loading-container"> Loading... </p>
          )}
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
functions.createLabels = function () {
  console.log("TET");
};

export default App;
