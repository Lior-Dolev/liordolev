import React, { useEffect } from 'react';
import classnames from 'classnames';
import { PageProps } from './types';
import PageHeader from './PageHeader';

const MAIN_PATH = 'ליאור דולב';

const Page = ({
  className = '', children, id, path,
}: PageProps) => {
  useEffect(() => {
    document.title = path ? `${MAIN_PATH} | ${path}` : MAIN_PATH;
  }, []);

  return (
    <div id={id} className={classnames('page', className)}>
      {children}
    </div>
  );
};

Page.Header = PageHeader;

export default Page;
