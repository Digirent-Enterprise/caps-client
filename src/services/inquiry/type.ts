import { DiscussionStatus } from "@/types/enum/discussion";

export namespace InquiryNS {
  export type InquiryStatus =
    | DiscussionStatus.PENDING
    | DiscussionStatus.ANSWERED
    | DiscussionStatus.PEER_REVIEWED;

  export type Inquiry = {
    id?: string;
    message: string;
    answer: string;
    status: InquiryStatus;
    userId: number;
    images: string[];
  };

  export type Inquiries = Inquiry[];

  /*params*/
  export type createInquiryParams = {
    message: string;
  };

  export type UpdateInquiryParams = Partial<{
    id?: string;
    message: string;
    answer: string;
    status: string;
  }>;

  export type GetInquiriesByStatusParams = {
    status: InquiryStatus;
  };
}
