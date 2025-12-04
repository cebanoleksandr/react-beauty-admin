import type { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
}

const Input: FC<IProps> = ({ value, onChange, error, className, ...rest }) => {
  return (
    <input
      {...rest}
      className={`px-4 py-2 w-full rounded-lg ${error ? 'border border-red-500 focus:outline-red-500' : 'border border-gray-200 focus:outline-blue-500'} bg-white ${className}`}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
