import React from 'react';
import Underline from './Underline';

type PageHeaderProps = {
  header: string;
};

const PageHeader = ({ header }: PageHeaderProps) => (
  <div className="page-header">
    <h1>{header}</h1>
    <Underline />
  </div>
);

export default PageHeader;
