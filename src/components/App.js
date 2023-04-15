import React from "react";

function App() {
  return (
    <div className="App">
      <h2 className="title"> CATALOG API </h2>
      <div className="list-container">
        <li>
          {/* ------------------------------------------- */}
          <div className="item-container">
            <div className="itm-img-section">
              <img
                className="item-thumbnail"
                alt=""
                src="https://cdn.discordapp.com/attachments/548209804825460760/1064417656125542400/Screenshot_2023-01-16_at_12.34.58_AM.png"
              />
              <p className="item-id"> 1234567890 </p>
            </div>
            <p className="item-name"> TEST TEXT </p>
          </div>
          {/* ------------------------------------------- */}
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
          </div>
          {/* ------------------------------------------- */}
        </li>
      </div>
    </div>
  );
}

export default App;
