import React, {Component} from "react";

// Creating Element----
 let elem = React.createElement("h1", null, "Hello World;");
 export default elem;

// Creating Component----
class App extends Component {
    render(){
        return React.createElement("h1", null, "Hello world..");
         //return <h1>Hello world..</h1>   -//----also write this in JSX----
    }
}
 export default App;

//----Functional Component----without props---
function Student(){
    return <h1>Hello React</h1>;
};
const Student = () => {
    return <h1>Hello React</h1>;
};

// //------Function with props---------
const Student = props => {
    return <h1>Hello {props.name}</h1>;
};
export default Student;

// //-------Class Component with props-------
class Teacher extends Component {
    render() {
        <h1>Hello {this.props.name}</h1>;
    }
}
export default Teacher;

//-----App function of Student1 from "./student.js"-----
import React from "react";
import Student1 from "./student";
export const App = () => {
  return (
    <div>
        <Student1 />
        <Student1 />
    </div>
  )
}
export default App;
