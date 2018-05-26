import React from 'react';

import classes from './Header.css';

const header = props => {
  return (
    <header className={classes.Header}>
      <h1>
        <a href="/">
          Guessing game
        </a>
      </h1>
      <button
        onClick={props.onRestart}
        className={classes.Restart}>
        Restart
      </button>
    </header>
  )
}
 
export default header;