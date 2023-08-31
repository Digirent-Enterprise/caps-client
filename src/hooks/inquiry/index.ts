import { useContext } from "react";

import { useImmer } from "use-immer";

import { LoadingContext } from "@/contexts/loading-context";
import { InquiryService } from "@/services/inquiry";
import { InquiryNS } from "@/services/inquiry/type";
import { CustomFn } from "@/types";
import { showToast } from "@/utils/toast";

type InquiryResult = {
  getInquiryByUserId: (x: InquiryNS.InquiryStatus) => void;
  createInquiry: (x: string, y?: CustomFn) => void;
  updateInquiry: (x: InquiryNS.UpdateInquiryParams) => void;
  getAllInquiries: (x: InquiryNS.InquiryStatus) => void;
  inquiries: InquiryNS.Inquiries;
};

const useInquiry = () => {
  const { setLoading } = useContext(LoadingContext);
  const [inquiries, setInquiries] = useImmer<InquiryNS.Inquiries>([]);
  const getInquiryByUserId = async (status: InquiryNS.InquiryStatus) => {
    try {
      setLoading(true);
      const response = await InquiryService.getInquiriesByUserId({
        status,
      });
      setInquiries(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const createInquiry = async (message: string, extraFn?: CustomFn) => {
    try {
      setLoading(true);
      const response = await InquiryService.createInquiry({ message });
      setInquiries((prev) => [...prev, response]);
      showToast(
        "success",
        "Successfully asking a question! Please be patient."
      );
      if (extraFn) extraFn();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const updateInquiry = async (data: InquiryNS.UpdateInquiryParams) => {
    try {
      setLoading(true);
      const response = await InquiryService.updateInquiry(data);
      await getInquiryByUserId("pending");
      showToast("success", "Update discussion successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getAllInquiries = async (status: InquiryNS.InquiryStatus) => {
    try {
      setLoading(true);
      const response = await InquiryService.getInquiries({ status });
      setInquiries(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    getInquiryByUserId,
    getAllInquiries,
    updateInquiry,
    createInquiry,
    inquiries,
  } as InquiryResult;
};

export default useInquiry;
