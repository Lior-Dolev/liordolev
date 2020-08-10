import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const NewsletterButton = () => (
  <Button className={'newsletter-button'} circular icon>
    <Icon name={'mail'} />
  </Button>
);

const Newletter = () => <NewsletterButton />;

export default Newletter;
