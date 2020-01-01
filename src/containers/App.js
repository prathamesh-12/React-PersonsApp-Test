import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {name: "Prats", age: "32", id: "aa11"},
      {name: "Mansi", age: "26", id: "bb22"},
      {name: "Raj", age: "10", id: "cc33"}
    ],
    otherState: "Some Other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("CLICKED!!!");
    this.setState({
      persons: [{name: newName, age: "32"},
      {name: "Mansi", age: "26"},
      {name: "Raj", age: "10"}]
    })
  }

  nameChangedHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex(pID => {
      return pID.id === personID;
    });

    const personObj = {...this.state.persons[personIndex]};

    personObj["name"] = event.target.value;

    const personArray = [...this.state.persons];
    personArray[personIndex] = personObj;

    this.setState({
      persons: personArray
    });
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (index) => {
    const personsArray = [...this.state.persons];
    personsArray.splice(index, 1);
    this.setState({ persons: personsArray });
  }
  
  render() {
    

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { 
            <Persons 
              persons={this.state.persons}
              click={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          }
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Nimbsss!')}
              changed={this.nameChangedHandler}
              >Hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} x
              age={this.state.persons[2].age}/> */}
          </div>
      );
    }

    

    return (
        <div className="App">
          
            <Cockpit 
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
              showPersons={this.state.showPersons}
              title={this.props.appTitle}
            />
            {persons}
        </div>
    );
  }
}

export default App;
