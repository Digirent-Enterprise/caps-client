import React from "react";

import { Popover, Transition } from "@headlessui/react";
import { IconDots } from "@tabler/icons-react";

import { IPopoverProps } from "@/shared/popover/type";

const Component: React.FC<IPopoverProps> = ({ options }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="focus:outline-none">
            <IconDots color="white" />
          </Popover.Button>

          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute left-1/2 z-10 mt-2 w-48 -translate-x-1/2  px-2 sm:px-0"
            >
              <div className="rounded-md bg-white shadow-md">
                <div className="py-1">
                  {options.map((option) => (
                    <button
                      key={option.label}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={option.onClick}
                    >
                      <div className="flex items-center">
                        <div>{option.icon}</div>
                        <span className="ml-2">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

Component.displayName = "Popover";
export default Component;
