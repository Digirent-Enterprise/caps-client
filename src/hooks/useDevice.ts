import { isDesktop, isMobile } from "react-device-detect";

const useDevice = () => {
  return {
    isMobile,
    isDesktop,
  };
};

export default useDevice;
