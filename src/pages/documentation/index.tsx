import React from "react";

import Tabs from "@/core/tabs";
import withLayout from "@/hoc/withLayout";

const Component: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Tabs />
    </div>
  );
};

Component.displayName = "Documentation";

export default withLayout(Component);
