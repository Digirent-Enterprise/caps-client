import { toast } from "react-toastify";

import { ToastMessageType } from "@/utils/toast/type";

export const showToast = (
  toastMessageType: ToastMessageType,
  message: string,
) => {
  switch (toastMessageType) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "info":
      toast.info(message);
      break;
  }
};
