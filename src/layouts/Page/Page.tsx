import React from 'react';
import classnames from 'classnames';
import { PageProps } from './types';

const Page = ({ className = '', children, id }: PageProps) => (
  <div id={id} className={classnames('page', className)}>
    {children}
  </div>
);

export default Page;
