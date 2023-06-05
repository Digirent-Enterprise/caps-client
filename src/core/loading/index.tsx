import React, { useContext, useMemo } from "react";

import { LoadingContext } from "@/contexts/loading-context";

const Component = React.memo(() => {
  const { loading } = useContext(LoadingContext);
  if (!loading) {
    return null;
  }

  return (
    <div className="absolute z-50 flex h-screen w-screen items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="flex h-1/4 w-1/6 flex-col items-center justify-center gap-10 bg-grey  rounded-md shadow-2xl">
        <div role="status">
          <img
            alt="loading"
            src={"/static/dashboard/cloud.png"}
            className="w-36  animate-bounce"
          />
        </div>
        <div className="flex space-x-1 relative bottom-12">
          <div className="animate-bounce font-bold text-white">Dengue</div>
          <div className="animate-bounce font-bold text-white delay-75">
            portal
          </div>
          <div className="animate-bounce font-bold text-white delay-100">
            is
          </div>
          <div className="animate-bounce font-bold text-white delay-150">
            loading
          </div>
          <div className="animate-bounce font-bold text-white delay-200">
            ...
          </div>
        </div>
      </div>
    </div>
  );
});

Component.displayName = "Loading";

export default Component;
