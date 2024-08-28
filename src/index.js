import React from "react";
import ReactDOM from "react-dom";

//Import for Student Function---
import Student from "./App";

//Import for Element in App.js---
import elem from "./App";

//Import for Component in App.js---
import App from "./App";

//------------------Jsx code--------------------
let el = <h1>Faiza Choudhry</h1>;  
ReactDOM.render(el,document.getElementById("root"));

//---------Bable convert Jsx code into this code--------
let el1 = React.createElement("h1", null, "Hello World");  
ReactDOM.render(el1,document.getElementById("root"));

 //-----render for Componenet App in App.js-----
ReactDOM.render(<App />,document.getElementById("root"));

//-----render function without props----
ReactDOM.render(<Student />,document.getElementById("root"));
//------render function with props------
ReactDOM.render(<Student name="React" />,document.getElementById("root"))

//-----render Class Components with props----
ReactDOM.render(<Teacher name="React" />,document.getElementById("root"));