import { SemanticICONS } from 'semantic-ui-react';

export type SocialLink = {
  href: string;
  iconName: SemanticICONS;
  tabIndex?: number;
};

export type SocialNavProps = {
  tabIndex?: number;
};
