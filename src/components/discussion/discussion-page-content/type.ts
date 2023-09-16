import { InquiryNS } from "@/services/inquiry/type";
import { IBaseProps } from "@/types";
import { DiscussionStatus } from "@/types/enum/discussion";

export type DiscussionPageContentTabType =
  | DiscussionStatus.PENDING
  | DiscussionStatus.ANSWERED
  | DiscussionStatus.PEER_REVIEWED;
export interface IDiscussionPageContentProps extends IBaseProps {
  tab?: DiscussionPageContentTabType;
}

export type OpenInquiryModalType = {
  open: boolean;
  inquiry?: InquiryNS.Inquiry;
};
