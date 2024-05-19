import React, { PropsWithChildren } from 'react';


const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return <button className='text-white rounded-sm px-4 py-2 bg-buttonColor hover:border-white'>{children}</button>;
};

export default Button;