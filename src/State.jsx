import React, { Component } from 'react';
//state in class component
class Student5 extends Component {
    state = {
        name: "Faiza Choudhry",
        roll: this.props.roll
    };
    render(){
        return (
            <h1>Hello, {this.state.name} Your roll Number is {this.state.roll}</h1>
        );
    }
}
export default Student5;


//state in constructor in class component

// import React, { Component } from 'react';
// class student6 extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name:"Frontend",
//             roll: this.props.roll
//         };
       
//     }
//     render(){
//         return(
//             <h1>Hello, {this.state.name} Your roll number is {this.state.roll}</h1>
//         );
//     }
// }
// export default student6;