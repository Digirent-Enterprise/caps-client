import React from "react";

import SingleTopic from "@/components/dicussion/single-topic";
import Pagination from "@/core/pagination";

const Component = () => {
  return (
    <div className="w-3/4 bg-gray-100">
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Topic List</h2>
        <SingleTopic />
        <SingleTopic />
        <SingleTopic />
        <SingleTopic />
      </div>
      <div className="my-10 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

Component.displayName = "DiscussionContent";
export default Component;
