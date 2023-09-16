import { InquiryNS } from "@/services/inquiry/type";

export interface IAnswerDiscussionModalProps {
  open: {
    open: boolean;
    inquiry?: InquiryNS.Inquiry;
  };
  onClose: () => void;
}
