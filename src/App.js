import React, {Component} from "react";

// Element----
let el = React.createElement("h1", null, "Hello World;")

// Component----
class App extends Component {
    render(){
        return React.createElement("h1", null, "Hello world..");
    }
}
export default App;
