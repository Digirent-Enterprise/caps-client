import path from "path";

import getConfig from "next/config";

export const renderFilePath = (staticFilePath: string) => {
  return path
    ? path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, staticFilePath)
    : staticFilePath;
};
