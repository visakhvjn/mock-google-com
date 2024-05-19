import React, { PropsWithChildren } from 'react';


const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-row-reverse w-full absolute top-0 left-0'>{children}</div>;
};

export default Header;