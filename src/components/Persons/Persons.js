import React, { Component, PureComponent } from 'react';

import Person from './Person/Person';

//const persons = (props) =>  {
class Persons extends PureComponent {

    /*static getDerivedStateFromProps(props, state) {
        console.log("Person.js -------- getDerivedStateFromProps", props);
        return state;
    }*/

    // In the following case use PureComponent instead of normal componnet as it implements 
    //shouldComponentUpdate with all props associated with it
    /*shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.js shouldComponentUpdate");
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.click !== this.props.click
            ) {
            return true;
        } else {
            return false;
        }
    }*/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons.js--------- getSnapshotBeforeUpdate");
        return { message: "Snapshot called!" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Persons.js ----------componentDidUpdate ", snapshot);
    }

    render(){
        return this.props.persons.map((person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age}
                key={person.id}
                click={() => this.props.click(index)}
                changed={(event) => this.props.changed(event, person.id)}
                />
            );
          })
    };
}

export default Persons;