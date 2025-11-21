import { type FC } from 'react';
import {
  Cog6ToothIcon,
  HomeIcon,
  PhoneIcon,
  SparklesIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import SidebarItem from './SidebarItem';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<IProps> = ({ isOpen, onClose }) => {
  const sidebarItems = [
    { title: 'Домашня', icon: HomeIcon, href: '/' },
    { title: 'Послуги', icon: SparklesIcon, href: '/services' },
    { title: 'Контакти', icon: PhoneIcon, href: '/contacts' },
    { title: 'Налаштування', icon: Cog6ToothIcon, href: '/settings' },
  ];

  if (!isOpen) {
    return null;
  }

  return (
    <div className="block md:hidden fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-50 p-4 animate-slideInFromLeft">
      <div className="flex justify-end mb-5">
        <XMarkIcon
          className='size-14 text-gray-800 hover:text-gray-600 transition duration-300 cursor-pointer p-3'
          onClick={onClose}
        />
      </div>

      <ul className="mx-4 space-y-2">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
