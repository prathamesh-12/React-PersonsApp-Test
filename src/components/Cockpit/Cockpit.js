import React from 'react';
import Radium, { StyleRoot } from 'radium';

import './Cockpit.css';

const Cockpit = (props) => {
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
    const classes = [];
    if(props.persons.length <= 2) {
      classes.push('red');
    }
    if(props.persons.length <= 1) {
      classes.push('bold');
    }

    if(props.showPersons) {
        style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'salmon',
            color: '#000'
        }
    }

    return (
        <StyleRoot>
            <div>
                <h1>{props.title}</h1>
                <p className={classes.join(' ')}>This is working!</p>
            
                <button 
                    style={style}
                    onClick={props.clicked}
                    >Toggle Persons
                </button>
            </div>
        </StyleRoot>
      );
}

export default Radium(Cockpit);