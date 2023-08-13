export namespace InquiryNS {
  export type InquiryStatus = "pending" | "answered" | "peer-reviewed";
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
