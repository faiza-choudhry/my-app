import React, {Component} from "react";

// Creating Element----
let elem = React.createElement("h1", null, "Hello World;");
export defaullt elem;

// Creating Component----
class App extends Component {
    render(){
        return React.createElement("h1", null, "Hello world..");
    //  return <h1>Hello world..</h1>   -----also write this in JSX----
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

//------Function with props---------
const Student = props => {
    return <h1>Hello {props.name}</h1>;
};
export default Student;

//-------Class Component with props-------
class Teacher extends Component {
    render() {
        <h1>Hello {this.props.name}</h1>;
    }
}
export default Teacher;

