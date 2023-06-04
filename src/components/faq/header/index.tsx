import React from "react";

import { breadcrumbItems } from "@/components/faq/constant";
import Breadcrumb from "@/core/breadcrumb";
import SearchInput from "@/shared/search-input";

const Component: React.FC = () => {
  return (
    <>
      <div className="bg-black p-10">
        <div className="mx-auto flex max-w-3xl items-center text-white">
          <h2 className="text-2xl font-bold">DICA</h2>
        </div>
        <div className="mx-auto mt-4 max-w-3xl">
          <SearchInput placeholder={""} searchTerm={""} onSearch={() => {}} />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        <Breadcrumb items={breadcrumbItems} currentPage={""} />
      </div>
    </>
  );
};

Component.displayName = "FaqHeader";
export default Component;
