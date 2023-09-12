import React from "react";

import { Kbd } from "@nextui-org/react";

const Component = () => {
  return (
    <div className="flex h-14 items-center justify-center border-t border-gray-300">
      <p className="text-center">
        <Kbd
          keys={["command"]}
          className="inline-block rounded border border-gray-300 bg-gray-800 px-2 py-1 text-white"
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
