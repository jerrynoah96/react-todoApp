import React from 'react';
import classes from './DotContents.module.css';

const dotContent = (props) => {
  return (

    <div className={classes.dotContentBox}>
      <p onClick={props.refreshList}>Refresh</p>
    </div>



  );
};

export default dotContent;