import React from 'react';
import { Button, ButtonProps, Icon } from 'semantic-ui-react';

const NewsletterButton = (props: ButtonProps) => (
  <Button {...props} className="newsletter-button" circular icon>
    <Icon name="mail" />
  </Button>
);

export default NewsletterButton;
