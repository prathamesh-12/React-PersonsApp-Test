import React, { Component } from 'react';

import Person from './Person/Person';

//const persons = (props) =>  {
class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("Person.js -------- getDerivedStateFromProps", props);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.js shouldComponentUpdate");
        return true;
    }

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