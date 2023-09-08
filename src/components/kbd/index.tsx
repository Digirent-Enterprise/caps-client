import React from "react";

import { Kbd } from "@nextui-org/react";

const Component = () => {
  return (
    <div className="h-14 border-t border-gray-300 flex items-center justify-center">
      <p className="text-center">
        <Kbd
          keys={["command"]}
          className="border border-gray-300 rounded px-2 py-1 inline-block bg-gray-800 text-white"
        >
          K
        </Kbd>{" "}
        Open command palette
      </p>
    </div>
  );
};

Component.displayName = "Kbd";
export default Component;
