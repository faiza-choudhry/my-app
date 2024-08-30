import React, { Component } from 'react';
class Student8 extends Component {
        state = {             // State Without constructor or State property.
            id: 1,             
            name: "Faiza Choudhry"
        };
    
    handleClick = (id,e) => {              //Event Handler Arrow Function
        console.log(id);
        console.log(e);
    };
    // handleClickArg = (e) => {  this.handleClick(this.state.id, e);
    // };
   
    render(){
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={e => { this.handleClick(this.state.id,e);}}>Delete</button>
                {/* for bind */}
                <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button>    
            </div>
        );
    }
};
export default Student8;