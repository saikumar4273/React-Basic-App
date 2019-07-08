import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id :'1', name: 'Sai', age: 23},
      {id: '2', name: 'Sai Kumar', age: 23}
    ],
    showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id == id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons} 
                  deletePersonHandler={this.deletePersonHandler}
                  nameChangedHandler={this.nameChangedHandler}/>
    }

    return (
          <div className={classes.App}>
            <Cockpit showPersons={this.state.showPersons}
                     persons={this.state.persons}
                     changed={this.togglePersonsHandler}/>
            {persons}
            </div>
        );
  }
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person.js';

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Sai', age: 23},
//       {name: 'Sai Kumar', age: 23}
//     ]
//   });



//  const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'Sai Kumar', age: 23},
//         {name: 'Sai Kumar', age: 23}
//       ]
//     })
//   }

//     return (
//           <div className="App">
//             <h1>Hi I'm a React App</h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Cricket</Person>
//           </div>
//         );
// }

// export default App;



