import React from "react";
import ReactDOM from "react-dom";


//import Student8 from "./ArgumentsToEventHandlres"
import Student8 from "./ArgumentsToEventHandlers";
ReactDOM.render(<Student8 />, document.getElementById("root"));

// //import for Student8 in "./Update state"
import Student7 from "./Update state";
ReactDOM.render(<Student7 roll="105"/>,document.getElementById("root"));

//import for Student5 in "./State.jsx"
import Student5 from "./State";
ReactDOM.render(<Student5 />, document.getElementById("root"));

// //import for student6 from "./State"
import student6 from "./State";
ReactDOM.render(<student6 roll="106" />,document.getElementById("root"));

// //import for Student4 in "./EventHandling in React Js"
import Student4 from "./Event Handling in React Js";
ReactDOM.render(<Student4 name="Faiza"/>, document.getElementById("root"));

// //import for Student in "./EventHandling in React Js"
import Student from "./Event Handling in React Js";
ReactDOM.render(<Student roll="102"/>, document.getElementById("root"));

// //  //import for Student2 in "./Props.js"---- props
import Student2 from "./Props";
ReactDOM.render(<Student2 name="Faiza" roll={1069} />,document.getElementById("root"));

// //  //import for App Function in "./App.js-----
import App from "./App";
ReactDOM.render(<App />,document.getElementById("root"));

//  //-----render function without props----
import Student3 from "./Props";
ReactDOM.render(<Student3 name ="Faiza"/>,document.getElementById("root"));


//-----render Class Components with props----
import Teacher from "./Props";
ReactDOM.render(<Teacher name="React" />,document.getElementById("root"));