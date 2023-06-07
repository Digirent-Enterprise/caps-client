import React from "react";

const Component = () => {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-xl font-semibold">Topic Title</h3>
      <div className="mb-2 flex items-center space-x-2">
        <span className="text-gray-500">Replies: 10</span>
        <span className="text-gray-500">Views: 100</span>
        <span className="text-gray-500">Activity: 5 mins ago</span>
      </div>
      <div className="rounded-lg bg-white p-4">
        <p>This is the content of the topic.</p>
        <p>More content...</p>
      </div>
    </div>
  );
};

Component.displayName = "SingleTopic";
export default Component;
