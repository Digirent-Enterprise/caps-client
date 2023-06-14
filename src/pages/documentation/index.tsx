import React from "react";

import Tabs from "@/core/tabs";
import withLayout from "@/hoc/withLayout";

const Component: React.FC = () => {
  return <Tabs />;
};

Component.displayName = "Documentation";

export default withLayout(Component);
