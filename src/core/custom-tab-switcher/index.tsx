import { memo } from "react";

import { Tab } from "@headlessui/react";

import { ITabSwitcherProps } from "@/core/custom-tab-switcher/type";

const Component = memo((props: ITabSwitcherProps) => {
  const { tabs = [], children, handleTabChange } = props;
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group onChange={handleTabChange}>
        <Tab.List className="flex w-full rounded-xl bg-dark-blue p-1 text-white">
          {tabs.map((category) => (
            <Tab
              key={category}
              className={({
                selected,
              }) => `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700,
                                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 font-weight-bold
                                    ${
                                      selected
                                        ? " bg-light-button-blue-hover text-white ring-2"
                                        : " text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                    }`}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">{children}</Tab.Panels>
      </Tab.Group>
    </div>
  );
});
Component.displayName = "CustomTabSwitcher";
export default Component;
