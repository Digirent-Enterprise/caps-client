import { InquiryNS } from "@/services/inquiry/type";
import { IBaseProps } from "@/types";

export type DiscussionPageContentTabs =
  | "pending"
  | "answered"
  | "peer-reviewed";
export interface IDiscussionPageContentProps extends IBaseProps {
  tab?: DiscussionPageContentTabs;
}

export type OpenInquiryModal = {
  open: boolean;
  inquiry?: InquiryNS.Inquiry;
};
