import React from "react";

import { FallbackProps } from "react-error-boundary";

import { AEFProps } from "@/components/appErrorFallback/type";

const sliceErrorStack = (stackTrace = "", numLines = 10) => {
  const lines = stackTrace.split("\n");
  const firstNLines = lines.slice(0, numLines);
  return firstNLines.join("\n");
};

const AppErrorFallback = ({
  error,
  errorInfo,
  resetErrorBoundary,
}: AEFProps) => {
  return (
    <div className="w-full p-8 bg-background-800">
      <h1 className="mb-4 text-5xl font-semibold">An Error Occurred</h1>
      <p className="mb-1 text-lg">
        The application detected an error, and it&apos;s been reported to the
        application development team. You can try clicking &quot;Reload the
        Page&quot; to return to the page you were on previously.
      </p>
      <p className="text-lg">
        If the error keeps occurring, please file a bug report with the
        following details, and include any steps to reproduce the issue:
      </p>
      <button className="my-8" onClick={resetErrorBoundary}>
        Reload the Page
      </button>
      <h3 className="mb-1 text-2xl font-semibold">Error Details</h3>

      <pre className="mb-3 text-red-300">Error: {error && error.message}</pre>

      <details>
        <summary className="mb-4">Expand to Show Error Stack Traces</summary>
        <h5 className="mb-1 text-lg font-semibold">Stack Trace</h5>
        <pre
          style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}
          className="mb-6"
        >
          {sliceErrorStack(error && error.stack)}
        </pre>
        <h4 className="mb-1 text-lg font-semibold">Component Stack</h4>
        <pre style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
          {sliceErrorStack(errorInfo?.componentStack)}
        </pre>
      </details>
    </div>
  );
};

export default AppErrorFallback;
