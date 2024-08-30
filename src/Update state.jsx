import React, { Component } from 'react';
//set state update state--
class Student7 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"Frontend",
            roll: this.props.roll
        };
       
    }
    handleClick = () =>  {
        this.setState({name:"Faiza",roll:"110"});
    };
    render(){
        return(
            <div>
                <h1>Hello Faiza Choudhry</h1>
                <h1>Hello, {this.state.name} Your roll number is {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
           
        );
    }
}
export default Student7;


//in this console show us object name and roll..
//handleClick = () => {
//this.setState(function(state,props){
//    console.log(state.name);       // show only name-----
//     console.log(props.roll);          // this show props of roll..

// });
//};

//also write this ---
//handleClick =() => {
//this.setState((state,props) => {
// console.log(props.name); 
//});
//};