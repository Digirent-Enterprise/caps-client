import { memo, useEffect } from "react";

import { useImmer } from "use-immer";

import AnswerDiscussionModal from "@/components/answer-discussion-modal";
import DiscussionItem from "@/components/discussion-item";
import { DefaultOpenInquiryModal } from "@/components/discussion-page-content/constant";
import {
  IDiscussionPageContentProps,
  OpenInquiryModalType,
} from "@/components/discussion-page-content/type";
import useInquiry from "@/hooks/inquiry";
import useDevice from "@/hooks/useDevice";
import { InquiryNS } from "@/services/inquiry/type";
import { DiscussionStatus } from "@/types/enum/discussion";

const Component = memo((props: IDiscussionPageContentProps) => {
  const { tab } = props;
  const { getAllInquiries, inquiries } = useInquiry();
  const { isMobile } = useDevice();
  const [openInquiry, setOpenInquiry] = useImmer<OpenInquiryModalType>(
    DefaultOpenInquiryModal,
  );

  const _onCloseInquiryModal = () => setOpenInquiry(DefaultOpenInquiryModal);
  const onOpenInquiryModal = (inquiry: InquiryNS.Inquiry) => {
    setOpenInquiry({ open: true, inquiry });
  };

  useEffect(() => {
    let statusToFetch = DiscussionStatus.PENDING;

    switch (tab) {
      case DiscussionStatus.ANSWERED:
        statusToFetch = DiscussionStatus.ANSWERED;
        break;
      case DiscussionStatus.PEER_REVIEWED:
        statusToFetch = DiscussionStatus.PEER_REVIEWED;
        break;
      default:
        break;
    }

    getAllInquiries(statusToFetch);
  }, [tab]);
  return (
    <section
      className={`hide-scrollbar mx-4 flex max-h-[100%] flex-auto flex-col overflow-y-scroll border px-8 shadow-accent-dark dark:border-dark-gray dark:bg-dark-gray-heavy ${
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
              hasButton={inquiry.status === DiscussionStatus.PENDING}
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
