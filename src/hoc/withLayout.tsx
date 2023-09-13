import React, { ComponentType, FC } from "react";

import Footer from "@/shared/footer";
import Header from "@/shared/header";

export default function withLayout<P extends object>(
  WrappedComponent: ComponentType<P>,
): FC<P> {
  const WithLayout: FC<P> = (props: P) => {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main
          data-testid="wrapped-component"
          className="h-fit w-full grow scroll-m-2 overflow-auto border-b border-gray-800 bg-light-background-gray"
        >
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };

  WithLayout.displayName = `withLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
}

function getDisplayName<P>(WrappedComponent: ComponentType<P>) {
  return WrappedComponent.displayName || "WrappedComponent";
}
