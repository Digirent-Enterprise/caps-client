import React from "react";

import LoginForm from "@/components/login-form";
import withLayout from "@/hoc/withLayout";

const Component = () => {
  return (
    <div className="flex h-full bg-light-background-gray dark:bg-dark-blue w-full items-center justify-center">
      <LoginForm />
    </div>
  );
};

Component.displayName = "Login";

export default withLayout(Component);
