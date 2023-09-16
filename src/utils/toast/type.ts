import { StatusType } from "@/types/enum/common/status-type";

export type ToastMessageType =
  | StatusType.ERROR
  | StatusType.SUCCESS
  | StatusType.INFO
  | StatusType.WARNING;
