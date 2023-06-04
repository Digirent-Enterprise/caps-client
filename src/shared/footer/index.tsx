import React from "react";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer
      data-testid="footer"
      className="fixed bottom-0 h-10 w-full bg-gray-100 bg-opacity-60 p-2  shadow-amber-50 md:p-3"
    >
      <div
        className={`container mx-auto ${isMobile ? "text-xs" : "text-base"}`}
      >
        <p className="text-sm text-blue md:text-base">
          © {new Date().getFullYear()} DICA. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

Component.displayName = "Footer";

export default Component;
