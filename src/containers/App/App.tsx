import React, { Component } from 'react';
import { MobileHeader, Newsletter } from '@components';
import Home from '../Home';

export default class App extends Component {
  render() {
    return (
      <div className={'ld-app'}>
        <MobileHeader />
        <Home />
        <Newsletter />
      </div>
    );
  }
}
