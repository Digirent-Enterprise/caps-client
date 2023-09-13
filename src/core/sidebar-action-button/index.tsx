import React, { memo } from "react";

import { ISidebarActionButton } from "@/core/sidebar-action-button/type";

const Component = memo((props: ISidebarActionButton) => {
  const { children, handleClick } = props;
  return (
    <button
      className="text-blue min-w-[20px] p-1 hover:text-neutral-100"
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

Component.displayName = "SidebarActionButton";
export default Component;
