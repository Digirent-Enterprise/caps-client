import React, { useContext, useEffect, useRef, useState } from "react";

import {
  IconSettings,
  IconPlus,
  IconUserCancel,
  IconNews,
  IconScreenshot,
  IconMarkdown,
  IconJson,
  IconAdjustmentsHeart,
  IconActivityHeartbeat,
  IconBellHeart,
  IconDeviceIpadHeart,
} from "@tabler/icons-react";
import { toPng } from "html-to-image";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import axios from "@/axios";
import ConversationList from "@/components/conversation-list";
import MessageList from "@/components/message-list";
import OnboardingTutorial from "@/components/onboarding-tutorial";
import Settings from "@/components/settings";
import WeatherReport from "@/components/weather-report";
import { AuthContext } from "@/contexts/auth-context";
import withAuth from "@/hoc/withLogin";
import useConversation from "@/hooks/conversation/useConversation";
import useMessage from "@/hooks/message/useMessage";
import useDevice from "@/hooks/useDevice";
import { MessageNS } from "@/services/message/type";
import CommandPalette from "@/shared/command-palette";
import ConversationModal from "@/shared/conversation-modal";
import DefaultChatMessage from "@/shared/default-chat-message";
import Popover from "@/shared/popover";
import SearchInput from "@/shared/search-input";
import StatusModal from "@/shared/status-modal";
import { formatModelOption } from "@/utils/models";

const Component: React.FC = () => {
  const { isMobile } = useDevice();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  {
    const [showConversationModal, setShowConversationModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const { t } = useTranslation("home");
    const { user, signOut } = useContext(AuthContext);
    const {
      getAllConversations,
      conversations,
      createNewConversation,
      selectedConversation,
      setSelectedConversation,
    } = useConversation();

    const { getAllMessages, messages } = useMessage();

    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const _handleOpenConversationModal = () => {
      setShowConversationModal(true);
    };

    const _handleCloseConversationModal = () => {
      setShowConversationModal(false);
    };

    const _handleSearchConversation = (term: string) => {
      setSearchTerm(term);
    };

    const filteredConversations = conversations.filter((conversation) =>
      conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const _onModalClose = () => {
      setOpen(false);
    };

    const _onModalConfirm = () => {
      router.push("/health-form/instruction");
      _onModalClose();
    };

    const _getUserStaticHealth = async () => {
      return await axios.get("/static-health");
    };

    const _initForm = async () => {
      const currentRecord = await _getUserStaticHealth();
      if (isEmpty(currentRecord)) {
        setOpen(true);
      }
    };

    const _openSettingsModal = () => {
      setIsSettingsModalOpen(true);
    };

    const _closeSettingsModal = () => {
      setIsSettingsModalOpen(false);
    };

    const _onScreenshot = () => {
      if (chatContainerRef.current === null) {
        return;
      }

      if (
        chatContainerRef &&
        chatContainerRef.current &&
        chatContainerRef.current
      )
        chatContainerRef.current?.classList.remove("max-h-full");
      toPng(chatContainerRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${selectedConversation?.name || "conversation"}.png`;
          link.href = dataUrl;
          link.click();
          if (chatContainerRef.current) {
            chatContainerRef.current?.classList.add("max-h-full");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const _handleExportJson = async () => {
      try {
        const json = JSON.stringify(messages);
        console.log(messages, "mess");
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "messages.json";
        link.click();
      } catch (error) {
        console.error("Error exporting messages:", error);
      }
    };

    const _handleExportMarkdown = () => {};

    const exportOptions = [
      {
        icon: <IconScreenshot />,
        label: "Take screenshot",
        onClick: _onScreenshot,
      },
      {
        icon: <IconJson />,
        label: "Export JSON",
        onClick: _handleExportJson,
      },
      {
        icon: <IconMarkdown />,
        label: "Export Markdown",
        onClick: _handleExportMarkdown,
      },
    ];

    useEffect(() => {
      if (user) _initForm();
    }, [user]);

    useEffect(() => {
      getAllMessages({ conversationId: selectedConversation.id });
    }, []);

    return (
      <div
        className={`text-light-hover-blue flex h-screen w-full overflow-hidden bg-light-background-gray antialiased dark:bg-dark-blue dark:text-dark-white ${
          isMobile ? "flex-col" : ""
        }`}
      >
        <div className={`flex flex-1 ${isMobile ? "h-full" : ""} flex-col`}>
          <main
            className={`flex min-h-0 grow ${
              isMobile ? "flex-col" : "flex-row"
            }`}
          >
            <section
              className={`group flex ${
                isMobile ? "h-full" : ""
              } w-80 flex-none flex-col overflow-auto transition-all duration-300 ease-in-out md:w-1/6 lg:max-w-sm`}
            >
              <div className="flex flex-none flex-row items-center justify-between p-4">
                <p className="text-light-hover-blue hidden font-bold md:block">
                  {t("welcome")} {user?.name}
                </p>
              </div>

              <div className="flex-none p-4">
                <SearchInput
                  placeholder={t("search")}
                  searchTerm={searchTerm}
                  onSearch={_handleSearchConversation}
                />
              </div>
              <div className="hover:light-input-hover-gray mx-4 flex-none cursor-pointer gap-3 rounded-md border border-light-white bg-light-button-green p-2 text-sm text-light-white transition-colors duration-200 hover:bg-light-button-green-hover">
                <div
                  data-tour="step1"
                  className="flex cursor-pointer items-center"
                  onClick={_handleOpenConversationModal}
                >
                  <IconPlus />
                  <span className="text-light-hover-blue ml-2">
                    {t("new_conversation")}
                  </span>
                </div>
              </div>
              <ConversationList
                conversations={filteredConversations}
                getAllConversations={getAllConversations}
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
              />

              <ConversationModal
                isOpen={showConversationModal}
                onClose={_handleCloseConversationModal}
                createNewConversation={createNewConversation}
              />
              <div className="grow"></div>
              <div className="flex border-t border-light-gray p-4 pt-8 shadow dark:border-dark-gray">
                <div className="flex flex-col gap-2">
                  <Link
                    href={"/health-record"}
                    className="flex cursor-pointer flex-row items-center gap-1"
                  >
                    <IconDeviceIpadHeart />
                    <span className="text-light-hover-blue ml-2 cursor-pointer text-sm">
                      {t("my_health")}
                    </span>
                  </Link>
                  <Link
                    href={"/news"}
                    className="flex cursor-pointer flex-row items-center gap-1"
                  >
                    <IconNews />
                    <span className="text-light-hover-blue ml-2 cursor-pointer text-sm">
                      {t("news")}
                    </span>
                  </Link>
                  <div className="flex cursor-pointer flex-row items-center gap-1">
                    <IconSettings />
                    <span
                      className="text-light-hover-blue ml-2 cursor-pointer text-sm"
                      onClick={_openSettingsModal}
                    >
                      {t("settings")}
                    </span>
                  </div>
                  <Settings
                    isOpen={isSettingsModalOpen}
                    onClose={_closeSettingsModal}
                  />
                  <div className="flex cursor-pointer flex-row items-center gap-1">
                    <IconUserCancel />
                    <span
                      className="text-light-hover-blue ml-2 cursor-pointer text-sm"
                      onClick={signOut}
                    >
                      {t("logout")}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`flex flex-auto flex-col border border-light-gray shadow dark:border-dark-gray ${
                isMobile ? "" : "w-full"
              }`}
            >
              <div className="flex flex-none flex-row items-center justify-between border-b border-light-gray px-6 py-4 shadow dark:border-dark-gray">
                <div className="flex flex-col">
                  <div data-tour="step2" className="flex items-center">
                    <span className="mb-2 mr-2 text-xl font-bold">
                      Dengue Intelligent Chatbot Assistance
                    </span>
                    <Popover options={exportOptions} />
                  </div>
                  {selectedConversation && conversations.length > 0 ? (
                    <div className="h-fit w-fit rounded bg-light-green px-5 py-1 text-sm text-white">
                      {formatModelOption(
                        selectedConversation?.chatBotType || ""
                      )}
                    </div>
                  ) : null}
                </div>
                <div data-tour="step3" className="flex">
                  {/*<WeatherReport />*/}
                </div>
              </div>
              {selectedConversation && conversations.length > 0 ? (
                <MessageList
                  ref={chatContainerRef}
                  dataTourOne="step4"
                  dataTourTwo="step5"
                  selectedConversation={selectedConversation}
                />
              ) : (
                <DefaultChatMessage />
              )}
            </section>
          </main>
        </div>
        <OnboardingTutorial />
        <StatusModal
          type="info"
          isOpen={open}
          onClose={_onModalClose}
          title={t("health_status_update")}
          description={`${t("hi")}, ${user?.name}. ${t("thank_you")}`}
          primaryButtonText={t("sure")}
          secondButton
          secondaryButtonText={t("not_right_now") || "Not right now"}
          onSecondaryButtonClick={_onModalClose}
          onPrimaryButtonClick={_onModalConfirm}
        />
        <CommandPalette />
      </div>
    );
  }
};

export default withAuth(Component);
