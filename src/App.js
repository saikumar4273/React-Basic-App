import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person.js';

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
    const style = {
     
      ':hover': {
        
      }
    };

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
      <div>
        {
          this.state.persons.map((person, index) => 
          <Person click={this.deletePersonHandler.bind(this, index)}
          changed={(event) =>this.nameChangedHandler(event, person.id)}
           name={person.name} age={person.age} key={person.id} />)
        } 
       </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length === 0) {
      assignedClasses.push(classes.bold);
    }

    return (
          <div className={classes.App}>
            <h1>Hi I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
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



