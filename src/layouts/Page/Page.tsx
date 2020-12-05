import React from 'react';
import classnames from 'classnames';
import { PageProps } from './types';
import PageHeader from './PageHeader';

const Page = ({ className = '', children, id }: PageProps) => (
  <div id={id} className={classnames('page', className)}>
    {children}
  </div>
);

Page.Header = PageHeader;

export default Page;
