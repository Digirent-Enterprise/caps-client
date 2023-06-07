import React from "react";

const Component = () => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Topic Title</h3>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-gray-500">Replies: 10</span>
        <span className="text-gray-500">Views: 100</span>
        <span className="text-gray-500">Activity: 5 mins ago</span>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p>This is the content of the topic.</p>
        <p>More content...</p>
      </div>
    </div>
  );
};

Component.displayName = "SingleTopic";
export default Component;
