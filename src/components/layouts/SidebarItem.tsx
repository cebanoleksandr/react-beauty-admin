import React, { type FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface ISidebarIcon {
  title: string;
  icon: React.ElementType;
  href: string;
}

interface IProps {
  item: ISidebarIcon;
}

const SidebarItem: FC<IProps> = ({ item }) => {
  return (
    <li
      className='relative mb-0.5 flex items-center justify-between rounded-xl cursor-pointer'
      style={{ overflow: 'hidden' }}
    >
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `flex gap-3 items-center w-full h-full p-2 overflow-hidden rounded-xl transition-colors duration-200 ease-in-out
          ${isActive ? 'bg-blue-300 font-semibold' : 'hover:bg-blue-200 text-gray-800'}`
        }
      >
        <item.icon className="w-5 h-5 text-blue-500" />
        {item.title}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
