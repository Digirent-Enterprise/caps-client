import React, { useState } from "react";

import { IconX } from "@tabler/icons-react";
import Modal from "react-modal";

import Button from "@/core/button";
import DropdownMenu from "@/core/dropdown-menu";
import useDevice from "@/hooks/useDevice";
import { ConversationNS } from "@/services/conversation/type";
import { CustomStyle } from "@/shared/conversation-modal/constant";
import { IConversationModalProps } from "@/shared/conversation-modal/type";

const Component = React.memo((props: IConversationModalProps) => {
  const { isOpen, onClose, createNewConversation } = props;
  const { isMobile } = useDevice();
  const [conversationName, setConversationName] = useState<string>("");
  const models: ConversationNS.ChatbotType[] = [
    ConversationNS.ChatbotType.DUMMY,
    ConversationNS.ChatbotType.SMART,
  ];

  const [selectedModel, setSelectedModel] =
    useState<ConversationNS.ChatbotType>(ConversationNS.ChatbotType.DUMMY);

  const _handleCancelClick = () => {
    onClose();
  };

  const _resetForm = () => {
    setConversationName("");
    setSelectedModel(ConversationNS.ChatbotType.DUMMY);
  };

  const _handleSubmitModal = () => {
    createNewConversation(conversationName, selectedModel);
    _resetForm();
    onClose();
  };

  const handleModelTypeChange = (value: ConversationNS.ChatbotType) => {
    setSelectedModel(value);
  };

  if (isMobile) {
    CustomStyle.content.width = "90%";
    CustomStyle.content.padding = "16px";
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={CustomStyle}>
      <div className="flex justify-end">
        <button onClick={onClose} className="text-white">
          <IconX />
        </button>
      </div>
      <h2 className="mb-4 text-xl font-bold text-white">
        Create a new conversation
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter conversation name"
          value={conversationName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConversationName(e.target.value)
          }
          className={`w-full rounded-md border border-gray-700 bg-gray-700 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none ${
            isMobile ? "text-sm" : ""
          }`}
        />
        <DropdownMenu
          options={models}
          onChange={(value: ConversationNS.ChatbotType) =>
            handleModelTypeChange(value)
          }
          selectedValue={selectedModel}
          label="Model type"
        />
      </div>
      <div className="flex justify-end pr-2">
        <div className="ml-5">
          <Button mode="secondary" onClick={_handleCancelClick}>
            Cancel
          </Button>
        </div>
        <div className="ml-5">
          <Button mode="primary" onClick={_handleSubmitModal}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "ConversationModal";

export default Component;
