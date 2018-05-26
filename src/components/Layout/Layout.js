import React, {Fragment} from 'react';

import Header from '../Header/Header';

const layout = props => {
  return (
    <Fragment>
      <Header onRestart={props.restartGame}/>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}
 
export default layout;