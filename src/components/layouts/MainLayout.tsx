import type { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Alert from '../UI/Alert';

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full bg-blue-50'>
      <div className='hidden md:block md:w-52 md:shrink-0'>
        <Sidebar />
      </div>

      <div className='flex-1 min-w-0'>
        <Header />

        <main>
          <div className='px-10 pt-20'>
            {children}
            <Alert />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
