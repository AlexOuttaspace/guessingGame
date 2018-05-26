import React from 'react';

import classes from './Tile.css'

const tile = props => {
  const tileClasses = [
    classes.Tile,
    !props.open && classes.Covered,
    props.guessed ? classes.Guessed : null
  ]

  return (
    <div 
      style={{
        backgroundColor: props.open && !props.guessed && props.color 
      }} 
      className={tileClasses.join(' ')}
      onClick={props.clicked} 
    >  
    </div>
  )
}
 
export default tile;