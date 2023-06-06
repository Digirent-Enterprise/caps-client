import React from "react";

import { IconLink, IconX, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import Modal from "react-modal";

import { CustomStyle } from "@/shared/sharing-modal/constant";
import { ISharingModalProps } from "@/shared/sharing-modal/type";
import { formatDate } from "@/utils/date-time";

const Component: React.FC<ISharingModalProps> = ({
  isOpen,
  closeModal,
  title,
  description,
  conversationName,
  updatedAt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="overlay"
      style={CustomStyle}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={closeModal}>
          <IconX size={20} />
        </button>
      </div>
      <hr className="my-4" />
      <p className="mb-4 text-sm">{description}</p>
      <div>
        <div className="mb-2 flex items-center">
          <div>
            <span className="text-sm font-medium">{conversationName}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500">
              {formatDate(updatedAt)}
            </span>
          </div>
        </div>
        {/* Content of the conversation */}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/faq" className="flex items-center">
            <IconExternalLink />
            <span className="ml-2">More info</span>
          </Link>
        </div>
        <button className="flex items-center rounded border-2 border-transparent bg-green-500 px-3 py-2 text-xs text-white focus:border-green-700 focus:outline-none">
          <IconLink size={18} />
          <span className="ml-2">Copy Link</span>
        </button>
      </div>
    </Modal>
  );
};

Component.displayName = "SharingModal";
export default Component;
