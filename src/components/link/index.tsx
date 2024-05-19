import React, { PropsWithChildren } from 'react';


const Link: React.FC<PropsWithChildren> = ({ children }) => {
  return <a href='#' className='hover:underline'>{children}</a>;
};

export default Link;