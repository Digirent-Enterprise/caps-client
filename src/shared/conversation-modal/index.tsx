import React, { useState } from "react";

import { IconX } from "@tabler/icons-react";
import Modal from "react-modal";

import Button from "@/core/button";
import DropdownMenu from "@/core/dropdown-menu";
import useDevice from "@/hooks/useDevice";
import { ConversationNS } from "@/services/conversation/type";
import { CustomStyle } from "@/shared/conversation-modal/constant";
import { IConversationModalProps } from "@/shared/conversation-modal/type";
import { renderChatBotOptions } from "@/utils/models";

const Component = React.memo((props: IConversationModalProps) => {
  const { isOpen, onClose, createNewConversation } = props;
  const { isMobile } = useDevice();
  const [conversationName, setConversationName] = useState<string>("");

  const mappedModels = React.useMemo(() => {
    return renderChatBotOptions();
  }, []);

  const models: ConversationNS.ChatbotType[] = Object.keys(
    ConversationNS.ChatbotType
  ).map((key) => ConversationNS.ChatbotType[key]);

  const [selectedModel, setSelectedModel] =
    useState<ConversationNS.ChatbotType>(
      ConversationNS.ChatbotType.OPEN_AI_BASE
    );

  const _handleCancelClick = () => {
    onClose();
  };

  const _resetForm = () => {
    setConversationName("");
    setSelectedModel(ConversationNS.ChatbotType.OPEN_AI_BASE);
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
      <div className="mb-2 flex border-b-2 border-b-gray-700 pb-2">
        <h2 className="mr-auto text-xl font-bold text-white">
          Create a new conversation
        </h2>
        <button onClick={onClose} className="text-white">
          <IconX />
        </button>
      </div>

      <div className="space-y-2">
        <label className="mb-1 block font-medium text-white">
          Conversation name
        </label>
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
        <div className="mt-2">
          <DropdownMenu
            options={mappedModels}
            onChange={(value: ConversationNS.ChatbotType) =>
              handleModelTypeChange(value)
            }
            selectedValue={selectedModel}
            label="Model type"
          />
        </div>
      </div>
      <div className="mt-3 flex justify-end">
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
