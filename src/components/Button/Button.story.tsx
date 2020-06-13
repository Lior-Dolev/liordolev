import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../index';

storiesOf('Components', module)
  .add('Button', () => (
    <div style={{ padding: 10 }}>
      <p>Default</p>
      <Button />
      <hr />
    </div>
  ));
