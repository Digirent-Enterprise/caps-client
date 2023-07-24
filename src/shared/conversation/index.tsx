import React, {
  DragEvent,
  KeyboardEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import {
  IconCheck,
  IconMessage,
  IconPencil,
  IconTrash,
  IconX,
  IconShare2,
} from "@tabler/icons-react";

import SidebarActionButton from "@/core/sidebar-action-button";
import { IConversation, IConversationProps } from "@/shared/conversation/type";
import SharingModal from "@/shared/sharing-modal";

const Component = React.memo(
  (
    props: IConversationProps & {
      selectedConversation: IConversation | null;
    }
  ) => {
    const { conversation, selected, createdAt, selectedConversation } = props;
    const [isDeleting, setIsDeleting] = useState(false);
    const [isRenaming, setIsRenaming] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [renameValue, setRenameValue] = useState("");

    const _handleEnterDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        selectedConversation && _handleRename(selectedConversation);
      }
    };

    const _handleUpdateConversation = (conversation: IConversation) => {};

    const _handleDeleteConversation = (conversation: IConversation) => {};

    const _handleDragStart = (
      e: DragEvent<HTMLButtonElement>,
      conversation: IConversation
    ) => {
      if (e.dataTransfer) {
        e.dataTransfer.setData("conversation", JSON.stringify(conversation));
      }
    };

    const _handleRename = (conversation: IConversation) => {
      if (renameValue.trim().length > 0) {
        _handleUpdateConversation(conversation);
        setRenameValue("");
        setIsRenaming(false);
      }
    };

    const _handleConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      if (isDeleting) {
        _handleDeleteConversation(conversation);
      } else if (isRenaming) {
        _handleRename(conversation);
      }
      setIsDeleting(false);
      setIsRenaming(false);
    };

    const _handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      setIsDeleting(false);
      setIsRenaming(false);
    };

    const _handleOpenRenameModal: MouseEventHandler<HTMLButtonElement> = (
      e
    ) => {
      e.stopPropagation();
      setIsRenaming(true);
      selectedConversation && setRenameValue(selectedConversation.name);
    };

    const _handleOpenDeleteModal: MouseEventHandler<HTMLButtonElement> = (
      e
    ) => {
      e.stopPropagation();
      setIsDeleting(true);
    };

    const _handleShareConversationModal: MouseEventHandler<
      HTMLButtonElement
    > = (e) => {
      e.stopPropagation();
      setIsSharing(true);
    };

    const _onSharingModalClose = () => {
      setIsSharing(false);
    };

    useEffect(() => {
      if (isRenaming) {
        setIsDeleting(false);
      } else if (isDeleting) {
        setIsRenaming(false);
      }
    }, [isRenaming, isDeleting]);

    return (
      <>
        <div className="relative flex items-center">
          {isRenaming && selectedConversation?.id === conversation.id ? (
            <div className="bg-light-gray group flex w-full items-center gap-3 rounded-md p-3 dark:bg-light-primary-button">
              <IconMessage size={18} />
              <input
                className="bg-light-gray mr-12 flex-1 overflow-hidden text-ellipsis text-left text-[12.5px] leading-3 text-light-blue-hover outline-none dark:bg-light-primary-button"
                type="text"
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                onKeyDown={_handleEnterDown}
                autoFocus
              />
            </div>
          ) : (
            <button
              className={`flex w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-400 p-3 text-sm text-light-blue-hover transition-colors duration-200 dark:text-black ${
                selectedConversation?.id === conversation.id
                  ? "bg-light-button-blue hover:bg-light-button-blue-hover dark:border-dark-gray-heavy dark:bg-light-primary-button"
                  : "hover:bg-light-gray bg-light-background-gray dark:border-dark-white dark:bg-dark-gray-heavy dark:text-dark-white"
              }`}
              draggable="true"
              onDragStart={(e) => _handleDragStart(e, conversation)}
            >
              <IconMessage
                size={18}
                className={`${
                  selectedConversation?.id === conversation.id
                    ? "text-light-white"
                    : "text-light-gray dark:text-dark-white"
                }`}
              />
              <div
                className={`relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3 ${
                  selectedConversation?.id === conversation.id
                    ? "pr-12 text-light-white"
                    : "pr-1"
                }`}
              >
                {conversation.name}
              </div>
            </button>
          )}

          {(isDeleting || isRenaming) &&
            selectedConversation?.id === conversation.id && (
              <div className="absolute right-1 z-10 flex text-light-blue-hover">
                <SidebarActionButton handleClick={_handleConfirm}>
                  <IconCheck size={18} className="text-light-button-blue" />
                </SidebarActionButton>
                <SidebarActionButton handleClick={_handleCancel}>
                  <IconX size={18} className="text-red" />
                </SidebarActionButton>
              </div>
            )}

          {selectedConversation?.id === conversation.id &&
            !isDeleting &&
            !isRenaming && (
              <div className="text-light-gray absolute right-1 z-10 flex">
                <SidebarActionButton handleClick={_handleOpenRenameModal}>
                  <IconPencil
                    size={18}
                    className="text-light-white dark:text-dark-white"
                  />
                </SidebarActionButton>
                <SidebarActionButton
                  handleClick={_handleShareConversationModal}
                >
                  <IconShare2
                    size={18}
                    className="text-light-white dark:text-dark-white"
                  />
                </SidebarActionButton>
                <SidebarActionButton handleClick={_handleOpenDeleteModal}>
                  <IconTrash
                    size={18}
                    className="text-light-white dark:text-dark-white"
                  />
                </SidebarActionButton>
              </div>
            )}
        </div>
        <SharingModal
          isOpen={isSharing}
          closeModal={_onSharingModalClose}
          title="Share Link to Chat"
          description="Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat."
          conversationName={conversation.name}
          updatedAt={conversation.createdAt}
        />
      </>
    );
  }
);

Component.displayName = "Conversation";
export default Component;
