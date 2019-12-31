import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';

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
    const style = {
      backgroundColor: 'green',
      color: '#fff',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: '#000'
      }
    };

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

            // this.state.persons.map((person, index) => {
            //   return (
            //     <Person 
            //       name={person.name} 
            //       age={person.age}
            //       key={person.id}
            //       click={this.deletePersonHandler.bind(this, index)}
            //       changed={(event) => this.nameChangedHandler(event, person.id)}
            //       />
            //   );
            // })
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: '#000'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>This is working!</p>
          {/* <button 
            style={style}
            onClick={() => this.switchNameHandler("Nimbs12!")}>Switch Name</button> */}
          <button 
            style={style}
            onClick={this.togglePersonsHandler}
            >Toggle Persons</button>
            {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
