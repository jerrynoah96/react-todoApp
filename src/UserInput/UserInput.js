import React from 'react';
import classes from './UserInput.module.css';


const userInput = (props) => {
  return(
      <div className={classes.inputContainer}> 
        <input 
        placeholder="input new task" 
        value={props.inputVal}
        onChange={props.handleUserInput}/>
        <button onClick={props.addTask}>Add</button>
      </div>

  );
}

export default userInput;