import { FC } from "react";

import { Switch } from "@nextui-org/react";

import { ISwitcherProps } from "@/core/switcher/type";

const Component: FC<ISwitcherProps> = ({ title, description, checked }) => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-light-text-heading dark:text-white">
          {title}
        </h2>
        <span className="text-xs text-light-text-paragraph dark:text-white">
          {description}
        </span>
      </div>
      <div className="relative ml-4">
        <Switch size="md" isSelected={checked} />
      </div>
    </div>
  );
};

Component.displayName = "Switcher";
export default Component;
