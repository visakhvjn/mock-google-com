import React, { PropsWithChildren } from 'react';

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-col w-full p-4'>{children}</div>;
};

export default Content;