import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from "react";

import Loading from "@/core/loading";

type LoadingContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Loading />
      {children}
    </LoadingContext.Provider>
  );
};
