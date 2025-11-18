import { Link } from 'react-router-dom';
import {
  BeakerIcon,
  CalendarIcon,
  Cog6ToothIcon,
  HomeIcon,
  SparklesIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const sidebarItems = [
    { title: 'Домашня', icon: HomeIcon, href: '/' },
    { title: 'Послуги', icon: SparklesIcon, href: '/services' },
    { title: 'Календар', icon: CalendarIcon, href: '/calendar' },
    { title: 'Клієнти', icon: UserGroupIcon, href: '/clients' },
    { title: 'Майстри', icon: UsersIcon, href: '/staff' },
    { title: 'Матерiали', icon: BeakerIcon, href: '/materiales' },
    { title: 'Налаштування', icon: Cog6ToothIcon, href: '/settings' },
  ];

  return (
    <div className="fixed flex flex-col justify-between left-0 top-0 w-52 h-screen p-2 bg-blue-100 z-2 border-r border-r-white">
      <div>
        <Link to='/' className="text-blue-700 font-bold text-3xl p-2 block">BEAUTY</Link>

        <ul className="h-4/5 mb-2.5 mt-7 overflow-y-auto">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
