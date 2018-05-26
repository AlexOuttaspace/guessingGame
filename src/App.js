import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import GameField from './components/GameField/GameField';

import {shuffleArray} from './utility/utility';

const CssColors = [
      'blue',
      'green',
      'red',
      'orange',
      'yellow',
      'cyan',
      'salmon',
      'lightblue'
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tiles: this.createColorObjectsArray(),
      prevOpened: null,
      openable: true,
      won: false
    }
  }

  restartGame = () => {
    this.setState({
      tiles: this.createColorObjectsArray(),
      prevOpened: null,
      openable: true,
      won: false
    });
  }

  createColorObjectsArray = () => {
    const colorsArray = [
      ...shuffleArray(CssColors),
      ...shuffleArray(CssColors)
    ];

    return colorsArray.map(c => ({
      color: c, open: false, guessed: false
    }));
  }

  openTileHandler = index => {
    if (!this.state.openable || this.state.prevOpened === index) {
      return
    }

    // open clicked tile
    this.setState((prevState) => {
      const tiles = prevState.tiles.map((t, i) => 
        i === index ? {...t, open: true} : t
      );

      return ({tiles})
    }, () => {
      const {prevOpened, tiles} = this.state;
      
      // if there's no seconde opened tile, 
      // set current tile as previously opened
      if (prevOpened === null) {
        this.setState({prevOpened: index});
        return;
      }

      // determine if both tiles have same color
      const guessed = tiles[index].color === tiles[prevOpened].color;
      
      this.setState({prevOpened: null, openable: false});
      
      // close/remove tiles after .3 seconds
      setTimeout(() => {
        if (!guessed) {
          this.closeAllTiles();
        } else {
          this.removeGuessedTiles(prevOpened, index);
        }
        this.checkForWin();
      }, 300);
    });
  }

  removeGuessedTiles = (first, second) => {
    this.setState((prevState) => {

      const tiles = prevState.tiles.map((t, i) => (
          i === first || i === second
          ? {...t, guessed: true}
          : t
      ));

      return ({tiles, openable: true});
    })
  }

  closeAllTiles = () => {
    this.setState((prevState) => {
      const tiles = prevState.tiles.map((t, i) => ({
        ...t, open: false
      }));

      return ({tiles, openable: true});
    });
  }

  checkForWin = () => {
    this.setState((prevState) => {
      const won = prevState.tiles.every(t => t.guessed);
      return ({won});
    });
  }

  render() {
    return (
      <Layout restartGame={this.restartGame}>
        <GameField
          restartGame={this.restartGame}
          tiles={this.state.tiles} 
          onTileOpen={this.openTileHandler}
          won={this.state.won}
        />
      </Layout>
    );
  }
}

export default App;
