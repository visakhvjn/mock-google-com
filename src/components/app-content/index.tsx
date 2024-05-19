import React from 'react';
import { Button, Content, Link } from '../index';
import { SearchIcon, MicIcon, CameraIcon } from '../../assets';

const AppContent: React.FC = ({ }) => {
  return <Content>
    <div className='p-4 mb-8'>
      <span className='text-8xl text-white font-bold'>Google</span>
    </div>
    <div className='relative flex'>
      <input type="text" className="w-full pl-10 pr-20 py-2 border rounded-full bg-bodyColor hover:bg-buttonColor" />
      <img src={SearchIcon} className='absolute left-0 inset-y-2 ml-3' />
      <img src={MicIcon} className='absolute right-0 inset-y-2 mr-3' />
      <img src={CameraIcon} className='absolute right-0 inset-y-2 mr-12' />
    </div>
    <div className='flex space-x-4 justify-center p-4'>
      <Button>Google Search</Button>
      <Button>I'm Feeling Lucky</Button>
    </div>
    <div className='flex space-x-2 justify-center p-4 text-sm'>
      <span className='text-white'>Google offered in:</span>
      <Link>हिन्दी</Link>
      <Link>বাংলা</Link>
      <Link>తెలుగు</Link>
      <Link>मराठी</Link>
      <Link>தமிழ்</Link>
      <Link>ગુજરાતી</Link>
      <Link>ಕನ್ನಡ</Link>
      <Link>മലയാളം</Link>
      <Link>ਪੰਜਾਬੀ</Link>
    </div>
  </Content>;
};

export default AppContent;