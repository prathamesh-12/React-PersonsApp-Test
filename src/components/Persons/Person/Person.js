import React, { Component } from 'react';

import './Person.css';

//const person = (props) => {
class Person extends Component {

    style  = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    static getDerivedStateFromProps(props, state) {
        return state;
    }

    shouldComponentUpdate() {
        console.log("Person ---------- shouldComponentUpdate", this.props.name);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Person--- getSnapshotBeforeUpdate  ", prevProps+"   pprevState--"+prevState);
        return null;
    }
    
    componentDidUpdate(prvProps, prevState, snapshot){
        console.log("Person--- componentDidUpdate called");
    }

    render() {

        return (
        // <p>I am {props.name} and I am {Math.floor(Math.random()*30)} years old</p>
            <div className="Person" style={this.style}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }

}

export default Person;
