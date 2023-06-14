import React from "react";

import { Disclosure } from "@headlessui/react";
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconBooks,
  IconTag,
  IconHelpCircle,
  IconBug,
} from "@tabler/icons-react";

import {
  ICategory,
  IResource,
  ITag,
} from "@/components/dicussion/sidebar/type";

const Component = () => {
  const resources = [
    {
      label: "Documentation",
      icon: <IconBooks className="mr-2 h-5 w-5" />,
    },
    {
      label: "Help Center",
      icon: <IconHelpCircle className="mr-2 h-5 w-5" />,
    },
  ];

  const categories = [
    {
      label: "Bugs reporting",
      icon: <IconBug className="mr-2 h-5 w-5" />,
    },
    {
      label: "Feature request",
      icon: <IconBooks className="mr-2 h-5 w-5" />,
    },
  ];

  const tags = [
    {
      label: "Tag 1",
      icon: <IconTag className="mr-2 h-5 w-5" />,
    },
    {
      label: "Tag 2",
      icon: <IconTag className="mr-2 h-5 w-5" />,
    },
  ];

  return (
    <div className="w-1/4 bg-gray-200">
      <div className="p-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Resources</span>
                {open ? (
                  <IconArrowNarrowUp className="h-5 w-5" />
                ) : (
                  <IconArrowNarrowDown className="h-5 w-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4">
                <ul className="space-y-2">
                  {resources.map((resource: IResource, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center text-gray-900 hover:text-blue-600"
                      >
                        {resource.icon}
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-4 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Categories</span>
                {open ? (
                  <IconArrowNarrowUp className="h-5 w-5" />
                ) : (
                  <IconArrowNarrowDown className="h-5 w-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4">
                <ul className="space-y-2">
                  {categories.map((category: ICategory, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center text-gray-900 hover:text-blue-600"
                      >
                        {category.icon}
                        {category.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-4 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Tags</span>
                {open ? (
                  <IconArrowNarrowUp className="h-5 w-5" />
                ) : (
                  <IconArrowNarrowDown className="h-5 w-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4">
                <ul className="space-y-2">
                  {tags.map((tag: ITag, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center text-gray-900 hover:text-blue-600"
                      >
                        {tag.icon}
                        {tag.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

Component.displayName = "DiscussionSidebar";
export default Component;
