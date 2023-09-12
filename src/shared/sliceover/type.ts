import { IMetadata } from "@/core/chat-message/type";

export interface ISliceOverProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  metadata: IMetadata[];
}
