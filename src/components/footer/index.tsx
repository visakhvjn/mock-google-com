import React, { PropsWithChildren } from 'react';


const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex w-full absolute bottom-0 left-0 p-2'>{children}</div>;
};

export default Footer;