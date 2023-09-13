import React, { FC } from "react";

import Tabs from "@/core/tabs";
import withLayout from "@/hoc/withLayout";

const Component: FC = () => {
  return (
    <div className="lg:py-30 flex h-screen justify-center py-40">
      <Tabs />
    </div>
  );
};

Component.displayName = "Documentation";

export default withLayout(Component);
