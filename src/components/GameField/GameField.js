import React from 'react';

import WinMessage from '../WinMessage/WinMessage';
import Tile from './Tile/Tile';

import classes from './GameField.css';

const gameField = props => {
  return (
    <section className={classes.GameField}>
      { 
        !props.won 
        ? (
          props.tiles.map((t, i) => 
            <Tile 
              key={t + i} 
              {...t}
              clicked={() => props.onTileOpen(i)}
            />
          )
        )
        : <WinMessage onRestart={props.restartGame}/>
      }
    </section>
  )
}
 
export default gameField;