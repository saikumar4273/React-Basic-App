// import React from 'react';

// import classes from './Person.module.css'

// const person = (props) => {
//     // const rnd = Math.random();
//     // if(rnd > 0.7) {
//     //     throw new Error('Something went wrong');
//     // }
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and i'm {props.age} Years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     );
// }

// export default person;

import React, { Component } from 'react';

import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';

import PropTypes from 'prop-types';

import classes from './Person.module.css'

class Person extends Component {
    // const rnd = Math.random();
    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }
    render() {
        console.log('Person js rendering');
        return (
            <Auxilary>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} Years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxilary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);