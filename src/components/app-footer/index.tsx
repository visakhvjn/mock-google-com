import React from 'react';
import { Footer, Link2 } from '../index';

const AppFooter: React.FC = ({ }) => {
  return <Footer>
    <div className='flex w-full justify-between px-8 text-sm py-2'>
      <div className='flex space-x-6'>
        <Link2>About</Link2>
        <Link2>Advertising</Link2>
        <Link2>Business</Link2>
        <Link2>How Search works</Link2>
      </div>
      <div className='flex space-x-8'>
        <Link2>Privacy</Link2>
        <Link2>Terms</Link2>
        <Link2>Settings</Link2>
      </div>
    </div>
  </Footer>;
};

export default AppFooter;