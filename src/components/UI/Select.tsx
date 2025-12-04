interface IProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  value: string;
  defaultValue?: string;
}

const Select = ({ options, onChange, value, defaultValue }: IProps) => {
  return (
    <form className="w-full">
      <select
        id="countries"
        className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-gray-200 rounded-lg focus:outline-blue-500
        text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option selected>{defaultValue ?? "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
