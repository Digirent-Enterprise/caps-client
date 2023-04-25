import React from "react";

import { FallbackProps } from "react-error-boundary";

export interface AEFProps extends FallbackProps {
  errorInfo: React.ErrorInfo | null;
}
