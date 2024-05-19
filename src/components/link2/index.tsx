import React, { PropsWithChildren } from 'react';

const Link2: React.FC<PropsWithChildren> = ({ children }) => {
  return <a href='#' className='text-white hover:underline hover:text-white'>{children}</a>;
};

export default Link2;