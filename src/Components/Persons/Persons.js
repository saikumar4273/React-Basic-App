// import React from 'react';
// import Person from './Person/Person';

// const persons = (props) => 
//     props.persons.map((person, index) =>
//     <Person click={props.deletePersonHandler.bind(this, index)}
//     changed={(event) =>props.nameChangedHandler(event, person.id)}
//      name={person.name} age={person.age} key={person.id} />
//      );

// export default persons;

import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    static getDervivedStateFromProps() {
        console.log('Persons js getDervivedFromProps');
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(console.log('Persons js shouldComponentUpdate', nextProps));
    //     if(nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons js getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('Persons js componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Persons js componentWillUnmount');
    }

    render() {
        console.log('Persons js rendering');
        return (
            this.props.persons.map((person, index) =>
              <Person click={this.props.deletePersonHandler.bind(this, index)}
                changed={(event) =>this.props.nameChangedHandler(event, person.id)}
                name={person.name} age={person.age} key={person.id} />
            )
        );
    }
}


export default Persons;