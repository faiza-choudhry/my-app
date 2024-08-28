import React from "react";
import ReactDOM from "react-dom";

//For Element in App.js---
import el from "./App";

// For Component in App.js---
import App from "./App";

//----Jsx code---
 let el = <h1>Faiza Choudhry</h1>;  
  ReactDOM.render(el,document.getElementById("root"));

//---Bable----
 let el = React.createElement("h1", null, "Hello World");  
 ReactDOM.render(el,document.getElementById("root"));

 // for Componenet in App.js
ReactDOM.render(<App />,document.getElementById("root"));