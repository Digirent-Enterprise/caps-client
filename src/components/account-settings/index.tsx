import { memo } from "react";

import useDynamicHealth from "@/hooks/dynamic-health";

const Component = memo(() => {
  // const {} =
  return (
    <>
      <h2 className="mb-4 text-xl font-semibold text-light-blue-hover dark:text-dark-white">
        My basic information
      </h2>
    </>
  );
});

Component.displayName = "AccountSettings";
export default Component;
