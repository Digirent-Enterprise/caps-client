import { InquiryNS } from "@/services/inquiry/type";

export interface IDiscussionItemProps {
  title: string;
  answer: string;
  status?: InquiryNS.InquiryStatus;
  hasButton?: boolean;
  onClick?: () => void;
}
