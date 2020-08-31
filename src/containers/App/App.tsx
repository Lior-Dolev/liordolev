import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { MobileHeader, Newsletter } from '@components';
import Router from './Router';

export default class App extends Component<
  {},
  { isMenuOpen: boolean; isNewsletterOpen: boolean }
> {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isNewsletterOpen: false,
    };
  }

  render() {
    const { isMenuOpen, isNewsletterOpen } = this.state;
    const tabIndex = isMenuOpen || isNewsletterOpen ? -1 : null;

    return (
      <HashRouter>
        <div className={'ld-app'}>
          <MobileHeader
            onOpenModal={() => this.setState({ isMenuOpen: true })}
            onCloseModal={() => this.setState({ isMenuOpen: false })}
            tabIndex={isNewsletterOpen ? -1 : null}
          />
          <main className={'main'}>
            <div style={{ height: 59 }} />
            <Router tabIndex={tabIndex} />
          </main>
          <Newsletter
            onOpen={() => this.setState({ isNewsletterOpen: true })}
            onClose={() => this.setState({ isNewsletterOpen: false })}
          />
        </div>
      </HashRouter>
    );
  }
}
