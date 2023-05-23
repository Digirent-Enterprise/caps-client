import React from "react";

import LoginForm from "@/components/login-form";
import withLayout from "@/hoc/withLayout";

const Component = () => {
  return (
    <div className="flex grow items-center justify-center">
      <LoginForm />
    </div>
  );
};

Component.displayName = "Login";

export default withLayout(Component);
