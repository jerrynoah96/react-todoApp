import React from 'react';
import classes from './TaskList.module.css';

const taskList = (props) =>{

  const tasks = props.tasks;
  const taskList = tasks.map(task => {
    return (
      <div className={classes.task} key={task.key}>
        <p>{task.content}
        </p>
        <span onClick={()=> props.deleteTask(task.key)}>+</span>
      </div>
    )
  })
  

  return(
    <div className={classes.taskList}>{taskList}</div>
  )

}

export default taskList;