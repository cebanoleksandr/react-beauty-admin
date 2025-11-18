import type { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<IProps> = ({ value, onChange, className, ...rest }) => {
  return (
    <input
      {...rest}
      className={`px-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-blue-500 bg-white ${className}`}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
