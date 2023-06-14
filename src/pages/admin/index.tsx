import React from "react";

import Dashboard from "@/pages/admin/dashboard";

const Component = React.memo(() => {
  return <Dashboard />;
});

Component.displayName = "Admin";
export default Component;
