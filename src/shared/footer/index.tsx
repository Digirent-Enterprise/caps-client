import React from "react";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer
      data-testid="footer"
      className="fixed bottom-0 h-10 w-full bg-black p-2 md:p-3"
    >
      <div
        className={`container mx-auto ${isMobile ? "text-xs" : "text-base"}`}
      >
        <p className="text-sm text-white md:text-base">
          © {new Date().getFullYear()} DICA. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

Component.displayName = "Footer";

export default Component;
