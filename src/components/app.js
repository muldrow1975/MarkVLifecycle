import React, { Component } from 'react';

import ContentPage from './page-content';
import Navigation from './navigation';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Life Cycle of my Armor Suits!</h1>
        <Navigation />
        <ContentPage />
      </div>
    );
  }
}