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

export function createLabel() {
  console.log("TEST");
}

//This is responsible for getting and returning any kind of response from an API.
export async function getResponse(Link) {
  const response = await fetch(Link); //request API data.
  const jsonData = await response.json();
  return jsonData; //data.
}

export default functions;
//[NOTE]: functions can be exported one by one or all together like done by the line above.
