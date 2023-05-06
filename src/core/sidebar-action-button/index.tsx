import React from "react";

import { ISidebarActionButton } from "@/core/sidebar-action-button/type";

const Component = React.memo((props: ISidebarActionButton) => {
  const { children, handleClick } = props;
  return (
    <button
      className="min-w-[20px] p-1 text-blue hover:text-neutral-100"
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

Component.displayName = "SidebarActionButton";
export default Component;
