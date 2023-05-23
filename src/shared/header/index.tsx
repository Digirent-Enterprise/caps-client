import React from "react";

import Link from "next/link";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <header
      data-testid="header"
      className="fixed top-0 h-20 w-full bg-black pb-4 md:p-6"
    >
      <div className="container mx-auto">
        <Link href={"/"}>
          <h1
            className={`text-${
              isMobile ? "lg" : "2xl"
            } font-bold text-white md:text-4xl`}
          >
            Dengue Intelligent Chatbot Assistance
          </h1>
        </Link>
      </div>
    </header>
  );
});

Component.displayName = "Header";

export default Component;
