import React from 'react';
import { Header, Link2 } from '../index';

const AppHeader: React.FC = ({ }) => {
  return <Header>
    <div className='flex w-full justify-end px-8 text-sm py-4'>
      <div className='flex space-x-8'>
        <Link2>Gmail</Link2>
        <Link2>Images</Link2>
      </div>
    </div>
  </Header>;
};

export default AppHeader;