import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { MobileHeader, Newsletter } from '@components';
import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className={'ld-app'}>
          <MobileHeader />
          <main className={'main'}>
            <Router />
          </main>
          <Newsletter />
        </div>
      </HashRouter>
    );
  }
}
