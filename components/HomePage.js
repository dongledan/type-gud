import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TypeGudPage from './TypeGudPage';
import HighScorePage from './HighScorePage';

export default function HomePage() {
  return (
    <Router>
      <div>
        <h1>Welcome to Type Gud</h1><hr/>
        <h2>We have 1 rule: Type Gud</h2>
        <h2>This is not called Type Bad</h2>
        <Route path='/play' component={ TypeGudPage } />
        <Route path='/scores' component={ HighScorePage } />
      </div>
      <div>
      <Link to="/play" >
        <button>PLAY</button>
      </Link>
      <Link to='/scores'>
        <button>HIGH SCORES</button>
      </Link>
    </div>
    <img src='https://image.shutterstock.com/z/stock-photo-typing-numbers-for-income-tax-return-with-pen-and-calculator-24644206.jpg' />
    </Router>
  )
}


// import Phaser from 'phaser';

// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// };

// const game = new Phaser.Game(config);
// const wpm = 0;