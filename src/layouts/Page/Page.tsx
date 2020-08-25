import React, { FC } from 'react';
import classnames from 'classnames';
import { PageProps } from './types';

const Page: FC<PageProps> = ({ className = '', children }) => (
  <div className={classnames('page', className)}>{children}</div>
);

export default Page;
