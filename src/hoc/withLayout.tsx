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
      <AuthProvider>
        <div className="flex h-screen flex-col">
          <Header />
          <main
            data-testid="wrapped-component"
            className="grow overflow-auto w-full h-fit scroll-m-2 border-b border-gray-800 px-4 bg-light-background-gray pb-10 pt-32"
          >
            <WrappedComponent {...props} />
          </main>
          <Footer />
        </div>
      </AuthProvider>
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
