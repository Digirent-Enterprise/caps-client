import React, { useEffect } from "react";

import { useRouter } from "next/router";

const Component = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/profile");
  });

  return <div />;
};

Component.displayName = "Admin";
export default Component;
