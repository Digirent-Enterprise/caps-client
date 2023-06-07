import React from "react";

const Component = () => {
  return (
    <div className="w-3/4 bg-gray-100">
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Topic Title</h2>
        <div className="mb-4 flex items-center space-x-2">
          <span className="text-gray-500">Replies: 10</span>
          <span className="text-gray-500">Views: 100</span>
          <span className="text-gray-500">Activity: 5 mins ago</span>
        </div>
        <div className="rounded-lg bg-white p-4">
          <p>This is the content of the topic.</p>
          <p>More content...</p>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "DiscussionContent";
export default Component;
