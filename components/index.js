import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import HomePage from './HomePage';

ReactDOM.render(
  <HomePage />,  
  document.getElementById('app')
)

export { default as HighScorePage } from './HighScorePage';
export { default as HomePage } from './HomePage';
export { default as TypeGudPage } from './TypeGudPage';
