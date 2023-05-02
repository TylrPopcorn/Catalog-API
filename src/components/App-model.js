import React from "react";
//
//
const vars = {
  //extra variables, debounecs, tables, etc that this file may need.
};
const functions = {
  //all functions jumbled together to be exported.
  createLabel,
  getResponse,
};

export function createLabel(data) {
  console.log("TEST", data);

  // <div className="item-container">
  //   <div className="itm-img-section">
  //     <img
  //       className="item-thumbnail"
  //       alt=""
  //       src="https://cdn.discordapp.com/attachments/548209804825460760/1064417656125542400/Screenshot_2023-01-16_at_12.34.58_AM.png"
  //     />
  //     <p className="item-id"> 1234567890 </p>
  //   </div>
  //   <p className="item-name"> TEST TEXT AAAAAAAAAAAA</p>
  // </div>;
}

//This is responsible for getting and returning any kind of response from an API.
export async function getResponse(Link) {
  const response = await fetch(Link); //request API data.
  const jsonData = await response.json();
  return jsonData; //data.
}

export default functions;
//[NOTE]: functions can be exported one by one or all together like done by the line above.
