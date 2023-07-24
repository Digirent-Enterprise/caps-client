import React from "react";

import { breadcrumbItems } from "@/components/faq/constant";
import Breadcrumb from "@/core/breadcrumb";
import SearchInput from "@/shared/search-input";

interface IBreadcrumbProps {
  currentPage: string;
}

const Component: React.FC<IBreadcrumbProps> = ({ currentPage }) => {
  return (
    <>
      <div className="bg-light-button-blue p-10 dark:bg-dark-bg-primary">
        <div className="text-bg-light-gray mx-auto flex max-w-3xl items-center dark:text-dark-white">
          <h2 className="text-2xl font-bold text-light-background-gray">
            DICA
          </h2>
        </div>
        <div className="mx-auto mt-4 max-w-3xl">
          <SearchInput placeholder={""} searchTerm={""} onSearch={() => {}} />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        <Breadcrumb items={breadcrumbItems} currentPage={currentPage} />
      </div>
    </>
  );
};

Component.displayName = "FaqHeader";
export default Component;
