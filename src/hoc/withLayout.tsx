import React from "react";

import { AuthProvider } from "@/contexts/auth-context";
import { LoadingProvider } from "@/contexts/loading-context";
import Footer from "@/shared/footer";
import Header from "@/shared/header";

export default function withLayout<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const WithLayout: React.FC<P> = (props: P) => {
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

function getDisplayName<P>(WrappedComponent: React.ComponentType<P>) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
  );
}
