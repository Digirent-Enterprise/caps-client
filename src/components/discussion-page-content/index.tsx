import { memo, useEffect } from "react";

import { useImmer } from "use-immer";

import AnswerDiscussionModal from "@/components/answer-discussion-modal";
import DiscussionItem from "@/components/discussion-item";
import { DefaultOpenInquiryModal } from "@/components/discussion-page-content/constant";
import {
  IDiscussionPageContentProps,
  OpenInquiryModal,
} from "@/components/discussion-page-content/type";
import useInquiry from "@/hooks/inquiry";
import useDevice from "@/hooks/useDevice";
import { InquiryNS } from "@/services/inquiry/type";

const Component = memo((props: IDiscussionPageContentProps) => {
  const { tab } = props;
  const { getAllInquiries, inquiries } = useInquiry();
  const { isMobile } = useDevice();
  const [openInquiry, setOpenInquiry] = useImmer<OpenInquiryModal>(
    DefaultOpenInquiryModal
  );

  const _onCloseInquiryModal = () => setOpenInquiry(DefaultOpenInquiryModal);
  const onOpenInquiryModal = (inquiry: InquiryNS.Inquiry) => {
    setOpenInquiry({ open: true, inquiry });
  };
  useEffect(() => {
    if (tab === "pending") getAllInquiries("pending");
    if (tab === "answered") getAllInquiries("answered");
    if (tab === "peer-reviewed") getAllInquiries("peer-reviewed");
  }, [tab]);
  return (
    <section
      className={`hide-scrollbar mx-4 flex flex-auto flex-col overflow-y-scroll border px-8 shadow-accent-dark dark:border-dark-gray dark:bg-dark-gray-heavy ${
        isMobile ? "" : "w-full"
      }`}
    >
      <div className="mt-4">
        {inquiries.map((inquiry, index) => {
          const onClick = () => {};
          return (
            <DiscussionItem
              key={index}
              title={inquiry.message}
              answer={inquiry.answer}
              status={inquiry.status}
              hasButton={inquiry.status === "pending"}
              onClick={() => onOpenInquiryModal(inquiry)}
            />
          );
        })}
      </div>
      <AnswerDiscussionModal
        open={openInquiry}
        onClose={_onCloseInquiryModal}
      />
    </section>
  );
});
Component.displayName = "DiscussionPageContent";
export default Component;
