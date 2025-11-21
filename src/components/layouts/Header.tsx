import { useState } from 'react';
import {
  ArrowDownOnSquareIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import Input from '../UI/Input';
import Button from '../UI/Button';
import LogoutPopup from '../popups/LogoutPopup';
import { useAppDispatch } from '../../storage/hooks';
import { removeUserAC } from '../../storage/adminSlice';
import { useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    setIsLogoutPopupVisible(false);
    localStorage.setItem('token-admin', '');
    dispatch(removeUserAC());
    navigate('/login');
  };

  return (
    <header className='fixed left-0 md:left-52 right-0 top-0 z-10 py-4 px-10 flex items-center justify-between bg-blue-50'>
      <div className="flex items-center w-full">
        <Bars3Icon
          className="size-10 mr-3 text-gray-600 cursor-pointer md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        />

        <div className='block md:flex items-center gap-2 w-full'>
          <span className='relative'>
            <Input placeholder='Пошук...' className='md:w-80 px-9' />
            <MagnifyingGlassIcon className="size-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            {/*             
              {!!query && (
                <XCircleIcon
                  className='size-4 absolute text-primary-dark top-1/2 right-3 -translate-y-1/2
                  hover:text-grey-1 transition duration-300 cursor-pointer'
                  onClick={onInputClear}
                />
              )}
            */}
          </span>
        </div>
      </div>

      <div className='hidden md:flex items-center gap-8'>
        <Button
          onClick={() => setIsLogoutPopupVisible(true)}
          mode="primary"
        >
          <div className="flex items-center justify-center gap-2">
            <ArrowDownOnSquareIcon className="size-5 text-white" />
            Logout
          </div>
        </Button>
      </div>

      <LogoutPopup
        isVisible={isLogoutPopupVisible}
        onClose={() => setIsLogoutPopupVisible(false)}
        onLogout={handleUserLogout}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
