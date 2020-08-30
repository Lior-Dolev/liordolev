import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { MobileHeader, Newsletter } from '@components';
import Router from './Router';
import 'wicg-inert';

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

    return (
      <HashRouter>
        <div className={'ld-app'}>
          <MobileHeader
            onOpenModal={() => this.setState({ isMenuOpen: true })}
            onCloseModal={() => this.setState({ isMenuOpen: false })}
            inert={isNewsletterOpen}
          />
          <main
            ref={(node) =>
              (isMenuOpen || isNewsletterOpen) &&
              node &&
              node.setAttribute('inert', '')
            }
            className={'main'}
          >
            <Router />
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
