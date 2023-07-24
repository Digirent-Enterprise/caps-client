import React, { useState } from "react";

import { IconX } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation("create_conversation");
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

  const _handleModelTypeChange = (value: ConversationNS.ChatbotType) => {
    setSelectedModel(value);
  };

  if (isMobile) {
    CustomStyle.content.width = "90%";
    CustomStyle.content.padding = "16px";
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={CustomStyle}
      className="absolute bg-light-background-gray dark:bg-dark-gray-heavy"
    >
      <div className="mb-2 flex border-b-2 border-b-light-gray pb-2">
        <h2 className="mr-auto text-xl font-bold text-light-blue-hover dark:text-white">
          {t("create")}
        </h2>
        <button
          onClick={onClose}
          className="text-light-blue-hover dark:text-white"
        >
          <IconX />
        </button>
      </div>

      <div className="space-y-2">
        <label className="mb-1 block font-medium text-light-blue-hover dark:text-white">
          {t("name")}
        </label>
        <input
          type="text"
          placeholder={t("create_name")}
          value={conversationName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConversationName(e.target.value)
          }
          className={`w-full rounded-md border border-gray-400 bg-light-background-gray py-2 pl-3 pr-10 text-light-blue-hover transition duration-300 ease-in focus:bg-light-gray focus:shadow-md focus:outline-none ${
            isMobile ? "text-sm" : ""
          }`}
        />
        <div className="mt-2">
          <DropdownMenu
            options={mappedModels}
            onChange={(value: ConversationNS.ChatbotType) =>
              _handleModelTypeChange(value)
            }
            selectedValue={selectedModel}
            label={t("model")}
          />
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <div className="ml-5">
          <Button mode="secondary" onClick={_handleCancelClick}>
            {t("cancel")}
          </Button>
        </div>
        <div className="ml-5">
          <Button mode="primary" onClick={_handleSubmitModal}>
            {t("save")}
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "ConversationModal";

export default Component;
