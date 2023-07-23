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
    <div className="relative flex w-full items-center">
      {!searchTerm && (
        <IconSearch
          className={`absolute ${
            isMobile ? "right-2" : "right-4"
          } cursor-pointer text-light-button-blue hover:text-light-button-blue-hover dark:text-dark-white`}
          size={18}
          onClick={_clearSearch}
        />
      )}
      <input
        className={`w-full rounded-md border py-2 pl-3 dark:border-dark-gray-heavy dark:bg-dark-gray ${
          isMobile ? "pr-6" : "pr-10"
        } text-light-blue-hover transition duration-300 ease-in focus:shadow-md focus:outline-none dark:text-dark-white`}
        type="text"
        placeholder={isMobile ? "" : placeholder}
        value={searchTerm}
        onChange={_handleSearchChange}
      />

      {searchTerm && (
        <IconX
          className={`absolute ${
            isMobile ? "right-2" : "right-4"
          } cursor-pointer text-light-blue-hover hover:text-neutral-400`}
          size={18}
          onClick={_clearSearch}
        />
      )}
    </div>
  );
});

Component.displayName = "SearchInput";

export default Component;
