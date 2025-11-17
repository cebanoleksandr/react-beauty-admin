import type { FC, ReactNode } from 'react';
import Alert from '../UI/Alert';

interface IProps {
  children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <main>
      <div className='px-10 pt-20'>
        {children}
        <Alert />
      </div>
    </main>
  );
};

export default AuthLayout;
