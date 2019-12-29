import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Prats", age: "32"},
      {name: "Mansi", age: "26"},
      {name: "Raj", age: "10"}
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [{name: "Prats", age: "32"},
      {name: event.target.value, age: "26"},
      {name: "Raj", age: "10"}]
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  
  render() {
    const style = {
      backgroundColor: '#fff',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person) => {
              return (
                <Person 
                  name={person.name} 
                  age={person.age}/>
              );
            })
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
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/> */}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Nimbs12!")}>Switch Name</button>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
