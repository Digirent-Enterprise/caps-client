import { Fragment } from "react";

import { Listbox } from "@headlessui/react";
import clsx from "clsx";

import { ListBoxOption } from "@/components/news/listbox/type";

const Component = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}: {
  label: string;
  options: ListBoxOption[];
  selectedOption: ListBoxOption;
  setSelectedOption: (option: ListBoxOption) => void;
}) => {
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className="space-y-1">
        <Listbox.Label className="block text-sm font-medium leading-5 text-gray-700">
          {label}
        </Listbox.Label>
        <div className="relative">
          <Listbox.Button as={Fragment}>
            <span className="inline-block w-full rounded-md shadow-sm">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                className="focus:shadow-outline-orange focus:border-orange-300 relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out focus:outline-none sm:text-sm sm:leading-5"
              >
                <span className="block truncate">
                  {
                    options.filter(
                      (option: ListBoxOption) =>
                        option.value === selectedOption.value
                    )[0].text
                  }
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </span>
          </Listbox.Button>
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
            <Listbox.Options className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
              {options.map((option: ListBoxOption) => (
                <Listbox.Option as={Fragment} value={option} key={option.value}>
                  {({ active, selected }) => (
                    <li
                      className={clsx(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        `${
                          active ? "bg-orange-600 text-white" : "text-gray-900"
                        }`
                      )}
                    >
                      <span
                        className={clsx(
                          "block truncate",
                          selected ? "font-semibold" : "font-normal"
                        )}
                      >
                        {option.text}
                      </span>
                      {selected && (
                        <span
                          className={clsx(
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                            active ? "text-white" : "text-orange-600"
                          )}
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}{" "}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </div>
      </div>
    </Listbox>
  );
};

Component.displayName = "ListBox";
export default Component;
