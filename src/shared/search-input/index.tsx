import React from "react";

import { IconSearch, IconX } from "@tabler/icons-react";

import useDevice from "@/hooks/useDevice";
import { ISearchInputProps } from "@/shared/search-input/type";

const Component = React.memo((props: ISearchInputProps) => {
  const { placeholder, searchTerm, onSearch } = props;
  const { isMobile } = useDevice();

  const _handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const _clearSearch = () => {
    onSearch("");
  };

  return (
    <div className="relative flex items-center w-full">
      {!searchTerm && (
        <IconSearch
          className={`absolute ${
            isMobile ? "right-2" : "right-4"
          } cursor-pointer dark:text-light-blue-hover hover:text-neutral-400`}
          size={18}
          onClick={_clearSearch}
        />
      )}
      <input
        className={`w-full rounded-md border border-gray-700 dark:bg-dark-white py-2 pl-3 ${
          isMobile ? "pr-6" : "pr-10"
        } text-gray-200 dark:text-dark-blue transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none`}
        type="text"
        placeholder={isMobile ? "" : placeholder}
        value={searchTerm}
        onChange={_handleSearchChange}
      />

      {searchTerm && (
        <IconX
          className={`absolute ${
            isMobile ? "right-2" : "right-4"
          } cursor-pointer text-dark-red hover:text-neutral-400`}
          size={18}
          onClick={_clearSearch}
        />
      )}
    </div>
  );
});

Component.displayName = "SearchInput";

export default Component;
