import React from "react";

import { Combobox } from "@headlessui/react";
import {
  IconPlus,
  IconSettingsCog,
  IconUserCircle,
  IconArrowForward,
  IconArrowRight,
} from "@tabler/icons-react";
import clsx from "clsx";

import { ICommandProps } from "@/shared/command-palette/command-group/type";

const Component: React.FC<ICommandProps> = ({ commands, group }) => {
  return (
    <>
      {commands.filter((command) => command.group === group).length >= 1 && (
        <div className="flex h-6 shrink-0 items-center bg-accent/50">
          <span className="px-3.5 text-xs text-slate-100">{group}</span>
        </div>
      )}
      {commands
        .filter((command) => command.group === group)
        .map((command, idx) => (
          <Combobox.Option key={idx} value={command}>
            {({ active }) => (
              <div
                className={clsx(
                  "flex h-[46px] w-full cursor-default items-center text-white transition-colors duration-100 ease-in hover:bg-primary/40",
                  active ? "bg-primary/40" : ""
                )}
              >
                <div className="flex w-full items-center px-3.5">
                  <div className="mr-3 flex w-4 items-center justify-center">
                    {mapCommandGroupToIcon(command.group.toLowerCase())}
                  </div>
                  <span className="flex flex-auto text-left text-sm">
                    {command.name}
                  </span>
                  <span className="text-[10px]">{command.shortcut}</span>
                </div>
              </div>
            )}
          </Combobox.Option>
        ))}
    </>
  );
};

const mapCommandGroupToIcon = (group: any) => {
  switch (group) {
    case "conversation":
      return <IconPlus className="h-4 w-4 text-white" />;
    case "navigation":
      return <IconArrowRight className="h-4 w-4 text-white" />;
    case "settings":
      return <IconSettingsCog className="h-4 w-4 text-white" />;
    case "account":
      return <IconUserCircle className="h-4 w-4 text-white" />;
    default:
      return <IconArrowForward className="h-4 w-4 text-white" />;
  }
};

Component.displayName = "CommandGroup";
export default Component;
