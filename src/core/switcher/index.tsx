import React, { ChangeEvent } from "react";

interface ISwitcherProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switcher: React.FC<ISwitcherProps> = ({
  title,
  description,
  checked,
  onChange,
}) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(!checked);
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
      <div className="relative ml-4">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleToggle}
        />
        <label>
          <span className="block h-7 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-200 transition-colors duration-300 ease-in">
            <span
              className={`right- absolute inset-y-0.5 left-0.5 block h-6 w-6 bg-white${
                checked ? "1" : "10"
              } rounded-full transition-all duration-300 ease-in`}
            ></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Switcher;
