import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilary from '../hoc/Auxilary';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App js constructor');
  }
  state = {
    persons: [
      {id :'1', name: 'Sai', age: 23},
      {id: '2', name: 'Sai Kumar', age: 23}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }
static getDerivedStateFromProps(props, state) {
  console.log('App js getDerivedFromProps');
  return state;
}

componentDidMount() {
  console.log('App js ComponentDidMount');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('App js shouldComponentUpdate');
  return true;
}

componentDidUpdate() {
  console.log('App js componentDidUpdate');
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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
          <Auxilary>
          <button onClick={() => {
            this.setState({showCockpit: false})
          }}>Remove Cockpit</button>
          {this.state.showCockpit ? 
          <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
                  personLength={this.state.persons.length}
                  changed={this.togglePersonsHandler} />
          : null }
         {persons}  
            
            </Auxilary>
        );
  }
}

export default withClass(App, classes.App);

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



