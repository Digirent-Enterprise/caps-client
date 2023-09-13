import React, { memo } from "react";

import Login from "@/pages/auth/login";

const Component = memo(() => {
  return <Login />;
});

Component.displayName = "Auth";

export default Component;
