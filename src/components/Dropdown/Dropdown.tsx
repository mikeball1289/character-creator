import type { Option } from "@/builder/builderTypes";
import type { FC } from "react";

interface DropdownProps {
  options: Option[];
  label: string;
  onOptionSelect: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, label, onOptionSelect }) => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <span>{label}</span>
      <select
        defaultValue=""
        className="bg-gray-700 text-white p-2 rounded-sm"
        onChange={(e) => onOptionSelect(e.target.value)}
      >
        <option value="" disabled hidden>
          Dropdown Button
        </option>
        {options.map(({ value, displayName }) => (
          <option key={value} value={value}>
            {displayName ?? value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
