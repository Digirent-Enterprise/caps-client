import { Switch } from "@nextui-org/react";

interface ISwitcherProps {
  title: string;
  description: string;
  checked: boolean;
}

const Component: React.FC<ISwitcherProps> = ({
  title,
  description,
  checked,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
      <div className="relative ml-4">
        <Switch size="md" checked={checked} />
      </div>
    </div>
  );
};

Component.displayName = "Switcher";
export default Component;
