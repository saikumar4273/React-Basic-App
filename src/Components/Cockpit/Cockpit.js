import React, { useEffect } from 'react';

import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    
    useEffect(() => {
        console.log('Cockpit useEffect');
        setTimeout(() => {
            alert('Data saved to cloud');
        }, 1000);
        return () => {
            console.log('Cockpit useEffect clean up')
        }
    }, []);


    let btnClass = '';
    const assignedClasses = [];
    
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personLength <= 1) {
        assignedClasses.push(classes.red);
      }
  
      if(props.personLength === 0) {
        assignedClasses.push(classes.bold);
      }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.changed}>Toggle Persons</button>
        </div>
    )
}

export default React.memo(Cockpit);