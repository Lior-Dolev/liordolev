import React, { Component } from 'react';
import { MobileHeader, Newsletter } from '@components';

export default class App extends Component {
  render() {
    return (
      <div className={'ld-app'}>
        <MobileHeader />
        <div className={'page'}>
          {[...Array(5).keys()].map((key) => (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              risus ut sem placerat sagittis. Nam dictum libero nec nulla
              tempus, sit amet dapibus est pulvinar. Ut mattis tempus purus, nec
              ultrices erat hendrerit at. In sit amet consectetur ligula.
              Vestibulum pulvinar pharetra lorem. Morbi tincidunt magna ante,
              maximus scelerisque ex blandit at. Nam ultrices nisl vitae
              bibendum semper. Quisque aliquet enim metus, nec rutrum sem
              suscipit quis. Cras metus ante, tincidunt id purus ac, porttitor
              aliquam diam. Nam mollis fringilla ante et aliquet. Aliquam quis
              euismod leo, non elementum magna.
            </p>
          ))}
        </div>
        <Newsletter />
      </div>
    );
  }
}
