import React, {Fragment} from 'react';

import classes from './WinMessage.css'

const winMessage = props => {
  return (
    <Fragment>
      <h1 className={classes.WinMessage}>
        Congratulations! You won!
      </h1>
      <button 
        onClick={props.onRestart}
        className={classes.PlayAgain}>
        Play again
      </button>
    </Fragment>
  )
}
 
export default winMessage;