// -----import PropTypes-----
import PropTypes from "prop-types";
import React, { Component } from "react";
class Student2 extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h1>Hello {this.props.roll}</h1>
            </div>
        );
    }
}
Student2.propTypes = {
    name: PropTypes.string.isRequired,    //if prop is important then we put isRequired with typechecking-
    roll: PropTypes.number.isRequired
};

Student2.defaultProps = {       //Default Props: if we dont pass value then we use this default value---
    name: "Frontend Developer",
    roll: 1064
};
export default Student2;




// //------Function with props---------
 export const Student3 = props => {
    return  <h1>Hello {props.name}</h1>;
    
};

// -------Class Component with props-------
// class Teacher extends Component {
//     render() {
//         return <h1>Hello {this.props.name}</h1>;
//     }
// }
// export default Teacher;