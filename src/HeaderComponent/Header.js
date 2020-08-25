import React from 'react';
import classes from './Header.module.css';


const header = (props) => {


  return (
    <header className = {classes.header}> 
      <h2 className='app-title'>React TodoApp</h2>

      <div className={classes.dotBox} onClick={props.clickToggleDotContent}>
        <div className={classes.dot}> </div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
    </header>
  );
};


export default header;