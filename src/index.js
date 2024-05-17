import printMe from "./print.js";
import _ from "lodash";
import "./style.css";
/*import Logo from "./user-logo.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`*/

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("div"); //create div to display elements\
  const btn = document.createElement("button"); //create btn element

  element.textContent = _.join(["Hello", "webpack"], " "); //use lodash
  element.classList.add("hello");

  /* const myIcon = new Image(); //use image imported
  myIcon.src = Logo; //assign image

  element.appendChild(myIcon); //append image

  console.log(Data); //load xml data to console
  console.log(Notes); //load csv data to console
*/

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
