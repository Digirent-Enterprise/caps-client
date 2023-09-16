import { InquiryNS } from "@/services/inquiry/type";
import axios from "src/utils/axios";

export class InquiryService {
  static getInquiries(
    params: InquiryNS.GetInquiriesByStatusParams,
  ): Promise<InquiryNS.Inquiries> {
    return axios.get("/inquiry/all-items", { params: params });
  }

  static getInquiriesByUserId(
    params: InquiryNS.GetInquiriesByStatusParams,
  ): Promise<InquiryNS.Inquiries> {
    return axios.get("/inquiry/item", { params: params });
  }

  static createInquiry(
    params: InquiryNS.createInquiryParams,
  ): Promise<InquiryNS.Inquiry> {
    return axios.post("/inquiry/item", params);
  }

  static updateInquiry(params: InquiryNS.UpdateInquiryParams) {
    return axios.put("/inquiry/item", params);
  }
}
