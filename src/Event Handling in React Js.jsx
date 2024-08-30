//Class Component..
import React, { Component } from 'react';
class Student extends Component {
    constructor(props){         //constructor  to bind this with function handleClick.
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {                // State in Class Component inside the Constructor.
            name: "Faiza Choudhry",
            roll: this.props.roll
        };
    }
    handleClick = () => {     //use arrow function or use constructor to bind "this" with function.
        console.log("Button Clicked", this);
    };
   
    render(){
        return (
            <div>
                <h1>Hello {this.state.name} Your Roll Number is {this.state.roll}</h1>
                <button onClick = {this.handleClick}>Click Me!</button>
            </div>
        );
    }
}
export default Student;

//Functional Component..
// import React from 'react';
// function Student4(props) {
//     const handleClick = () => {
//         console.log("Button Clicked");
//     };
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <button onClick={handleClick}>Click Me!</button>
//         </div>
//     );
// }
// export default Student4;


//In React
//function handleClick(e){
//   e.preventDefault();
//    console.log("Clicked");
//}
// <a href="#" onClick={handleClick}> Click me </a>


//Code of Link with Event...
// function Student4(props) {
//     const handleClick = (e) => {
    //      e.preventDefault();     //default behaviour prevent
//         console.log("Button Clicked");
//     };
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <a href="http://www.geekyshows.com" onClick={handleClick}>Click Me!</a>
//         </div>
//     );
// }
// export default Student4;