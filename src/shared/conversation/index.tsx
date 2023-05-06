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
} from "@tabler/icons-react";

import SidebarActionButton from "@/core/sidebar-action-button";
import {
  DefaultConversation,
  IConversation,
  IConversationProps,
} from "@/shared/conversation/type";

const Component = React.memo((props: IConversationProps) => {
  const { conversation, selected } = props;
  const [selectedConversation, setSelectedConversation] =
    useState(DefaultConversation);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState("");

  const _handleEnterDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      selectedConversation && _handleRename(selectedConversation);
    }
  };

  const _handleUpdateConversation = (conversation: IConversation) => {};

  const _handleSelectConversation = (conversation: IConversation) => {};

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

  const _handleOpenRenameModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsRenaming(true);
    selectedConversation && setRenameValue(selectedConversation.name);
  };
  const _handleOpenDeleteModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsDeleting(true);
  };

  useEffect(() => {
    if (isRenaming) {
      setIsDeleting(false);
    } else if (isDeleting) {
      setIsRenaming(false);
    }
  }, [isRenaming, isDeleting]);
  return (
    <div
      className={`relative flex items-center ${selected ? "bg-gray-700" : ""}`}
    >
      {isRenaming && selectedConversation?.id === conversation.id ? (
        <div className="flex w-full items-center gap-3 rounded-lg bg-[#343541]/90 p-3">
          <IconMessage size={18} />
          <input
            className="mr-12 flex-1 overflow-hidden text-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100"
            type="text"
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onKeyDown={_handleEnterDown}
            autoFocus
          />
        </div>
      ) : (
        <button
          className={`flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90 ${
            selectedConversation?.id === conversation.id
              ? "bg-[#343541]/90"
              : ""
          }`}
          onClick={() => _handleSelectConversation(conversation)}
          draggable="true"
          onDragStart={(e) => _handleDragStart(e, conversation)}
        >
          <IconMessage size={18} />
          <div
            className={`relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3 ${
              selectedConversation?.id === conversation.id ? "pr-12" : "pr-1"
            }`}
          >
            {conversation.name}
          </div>
        </button>
      )}

      {(isDeleting || isRenaming) &&
        selectedConversation?.id === conversation.id && (
          <div className="absolute right-1 z-10 flex text-gray-300">
            <SidebarActionButton handleClick={_handleConfirm}>
              <IconCheck size={18} />
            </SidebarActionButton>
            <SidebarActionButton handleClick={_handleCancel}>
              <IconX size={18} />
            </SidebarActionButton>
          </div>
        )}

      {selectedConversation?.id === conversation.id &&
        !isDeleting &&
        !isRenaming && (
          <div className="absolute right-1 z-10 flex text-gray-300">
            <SidebarActionButton handleClick={_handleOpenRenameModal}>
              <IconPencil size={18} />
            </SidebarActionButton>
            <SidebarActionButton handleClick={_handleOpenDeleteModal}>
              <IconTrash size={18} />
            </SidebarActionButton>
          </div>
        )}
    </div>
  );
});

Component.displayName = "Conversation";
export default Component;
