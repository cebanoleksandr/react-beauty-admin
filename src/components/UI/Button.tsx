import { type FC, type HTMLAttributes, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  link?: boolean;
  to?: string;
  mode?: 'success' | 'error' | 'warning' | 'primary' | '';
  disabled?: boolean;
  full?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IProps> = ({
  link = false,
  to = '/',
  mode = '',
  disabled = false,
  full = false,
  children,
  onClick = () => {},
  className = '',
  ...rest
}) => {
  const buttonClasses = useMemo(() => {
    const baseClasses = [
      'px-4',
      'py-2',
      'font-inherit',
      'rounded-full',
      'inline-block',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      className
    ];

    const disabledClasses = disabled ? ['bg-gray-100', 'cursor-not-allowed'] : ['cursor-pointer'];

    let modeClasses: string[] = [];
    let hoverActiveClasses: string[] = [];

    if (disabled) {
      modeClasses = ['bg-gray-100', 'border', 'border-gray-300', 'text-gray-800'];
    } else {
      switch (mode) {
        case 'success':
          modeClasses = ['bg-green-500', 'border', 'border-green-500', 'text-white'];
          hoverActiveClasses = ['hover:bg-green-600', 'active:bg-green-700', 'hover:border-green-600'];
          break;
        case 'error':
          modeClasses = ['bg-red-500', 'border', 'border-red-500', 'text-white'];
          hoverActiveClasses = ['hover:bg-red-600', 'hover:border-red-600', 'active:bg-red-700'];
          break;
        case 'warning':
          modeClasses = ['bg-yellow-500', 'border', 'border-yellow-500', 'text-white'];
          hoverActiveClasses = ['hover:bg-yellow-600', 'hover:border-yellow-600', 'active:bg-yellow-700'];
          break;
        case 'primary':
          modeClasses = ['bg-blue-500', 'border', 'border-blue-500', 'text-white'];
          hoverActiveClasses = ['hover:bg-blue-600', 'hover:border-blue-600', 'active:bg-blue-700'];
          break;
        default:
          modeClasses = ['bg-gray-100', 'border', 'border-gray-300', 'text-gray-800'];
          hoverActiveClasses = ['hover:bg-gray-200', 'active:bg-gray-300'];
      }
    }

    const fullClasses = full ? ['w-full'] : [];

    const linkSpecificClasses = link ? ['no-underline', 'flex', 'justify-center'] : [];

    return [
      ...baseClasses,
      ...disabledClasses,
      ...modeClasses,
      ...hoverActiveClasses,
      ...fullClasses,
      ...linkSpecificClasses,
    ].join(' ');
  }, [link, to, mode, disabled, full]);

  if (link) {
    return (
      <Link to={disabled ? '#' : to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
