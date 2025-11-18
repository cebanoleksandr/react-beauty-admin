import type { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  onKeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<IProps> = ({ value, onChange, className, rows, onKeyUp, ...rest }) => {
  return (
    <textarea
      {...rest}
      className={`resize-none w-full bg-white border border-gray-200 rounded-lg focus:outline-blue-500 px-4 py-2 ${className}`}
      value={value}
      rows={rows || 3}
      onChange={onChange}
      onKeyUp={onKeyUp}
    ></textarea>
  )
}

export default Textarea;