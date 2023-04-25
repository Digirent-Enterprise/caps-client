import { useEffect, useRef, useState } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

import { Chat } from "@/components/shared/chat/Chat";
import { ChatBar } from "@/components/shared/chatBar/ChatBar";
import HomeContext from "@/components/shared/home/HomeContext";
import {
  HomeInitialState,
  initialState,
} from "@/components/shared/home/HomeState";
import { MobileNavbar } from "@/components/shared/navigation/MobileNavbar";
import PromptBar from "@/components/shared/promptBar/PromptBar";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import useErrorService from "@/services/errorService";
import useApiService from "@/services/useApiService";
import { Conversation } from "@/types/Chat";
import { KeyValuePair } from "@/types/Data";
import { FolderInterface, FolderType } from "@/types/Folder";
import { OpenAIModelID, OpenAIModels, fallbackModelID } from "@/types/Openai";
import { Prompt } from "@/types/Prompt";
import {
  cleanConversationHistory,
  cleanSelectedConversation,
} from "@/utils/app/clean";
import { DEFAULT_SYSTEM_PROMPT, DEFAULT_TEMPERATURE } from "@/utils/app/const";
import {
  saveConversation,
  saveConversations,
  updateConversation,
} from "@/utils/app/conversation";
import { saveFolders } from "@/utils/app/folders";
import { savePrompts } from "@/utils/app/prompts";

interface Props {
  serverSideApiKeyIsSet: boolean;
  serverSidePluginKeysSet: boolean;
  defaultModelId: OpenAIModelID;
}

const Home = ({
  serverSideApiKeyIsSet,
  serverSidePluginKeysSet,
  defaultModelId,
}: Props) => {
  const { t } = useTranslation("chat");
  const { getModels } = useApiService();
  const { getModelsError } = useErrorService();
  const [initialRender, setInitialRender] = useState<boolean>(true);

  const homeContextValue = useCreateReducer<HomeInitialState>({
    initialState,
  });

  const {
    state: {
      apiKey,
      lightMode,
      folders,
      conversations,
      selectedConversation,
      prompts,
      temperature,
    },
    dispatch,
  } = homeContextValue;

  const stopConversationRef = useRef<boolean>(false);

  const { data, error, refetch } = useQuery(
    ["GetModels", apiKey, serverSideApiKeyIsSet],
    ({ signal }) => {
      if (!apiKey && !serverSideApiKeyIsSet) return null;

      return getModels(
        {
          key: apiKey,
        },
        signal
      );
    },
    { enabled: true, refetchOnMount: false }
  );

  useEffect(() => {
    if (data) dispatch({ field: "models", value: data });
  }, [data, dispatch]);

  useEffect(() => {
    dispatch({ field: "modelError", value: getModelsError(error) });
  }, [dispatch, error, getModelsError]);

  // FETCH MODELS ----------------------------------------------

  const handleSelectConversation = (conversation: Conversation) => {
    dispatch({
      field: "selectedConversation",
      value: conversation,
    });

    saveConversation(conversation);
  };

  // FOLDER OPERATIONS  --------------------------------------------

  const handleCreateFolder = (name: string, type: FolderType) => {
    const newFolder: FolderInterface = {
      id: uuidv4(),
      name,
      type,
    };

    const updatedFolders = [...folders, newFolder];

    dispatch({ field: "folders", value: updatedFolders });
    saveFolders(updatedFolders);
  };

  const handleDeleteFolder = (folderId: string) => {
    const updatedFolders = folders.filter((f) => f.id !== folderId);
    dispatch({ field: "folders", value: updatedFolders });
    saveFolders(updatedFolders);

    const updatedConversations: Conversation[] = conversations.map((c) => {
      if (c.folderId === folderId) {
        return {
          ...c,
          folderId: null,
        };
      }

      return c;
    });

    dispatch({ field: "conversations", value: updatedConversations });
    saveConversations(updatedConversations);

    const updatedPrompts: Prompt[] = prompts.map((p) => {
      if (p.folderId === folderId) {
        return {
          ...p,
          folderId: null,
        };
      }

      return p;
    });

    dispatch({ field: "prompts", value: updatedPrompts });
    savePrompts(updatedPrompts);
  };

  const handleUpdateFolder = (folderId: string, name: string) => {
    const updatedFolders = folders.map((f) => {
      if (f.id === folderId) {
        return {
          ...f,
          name,
        };
      }

      return f;
    });

    dispatch({ field: "folders", value: updatedFolders });

    saveFolders(updatedFolders);
  };

  // CONVERSATION OPERATIONS  --------------------------------------------

  const handleNewConversation = () => {
    const lastConversation = conversations[conversations.length - 1];

    const newConversation: Conversation = {
      id: uuidv4(),
      name: `${t("New Conversation")}`,
      messages: [],
      model: lastConversation?.model || {
        id: OpenAIModels[defaultModelId].id,
        name: OpenAIModels[defaultModelId].name,
        maxLength: OpenAIModels[defaultModelId].maxLength,
        tokenLimit: OpenAIModels[defaultModelId].tokenLimit,
      },
      prompt: DEFAULT_SYSTEM_PROMPT,
      temperature: DEFAULT_TEMPERATURE,
      folderId: null,
      time: new Date().getTime(),
    };

    const updatedConversations = [...conversations, newConversation];

    dispatch({ field: "selectedConversation", value: newConversation });
    dispatch({ field: "conversations", value: updatedConversations });

    saveConversation(newConversation);
    saveConversations(updatedConversations);

    dispatch({ field: "loading", value: false });
  };

  const handleUpdateConversation = (
    conversation: Conversation,
    data: KeyValuePair
  ) => {
    const updatedConversation = {
      ...conversation,
      [data.key]: data.value,
    };

    const { single, all } = updateConversation(
      updatedConversation,
      conversations
    );

    dispatch({ field: "selectedConversation", value: single });
    dispatch({ field: "conversations", value: all });
  };

  // EFFECTS  --------------------------------------------

  useEffect(() => {
    if (window.innerWidth < 640) {
      dispatch({ field: "showChatBar", value: false });
    }
  }, [selectedConversation]);

  useEffect(() => {
    defaultModelId &&
      dispatch({ field: "defaultModelId", value: defaultModelId });
    serverSideApiKeyIsSet &&
      dispatch({
        field: "serverSideApiKeyIsSet",
        value: serverSideApiKeyIsSet,
      });
    serverSidePluginKeysSet &&
      dispatch({
        field: "serverSidePluginKeysSet",
        value: serverSidePluginKeysSet,
      });
  }, [defaultModelId, serverSideApiKeyIsSet, serverSidePluginKeysSet]);

  // ON LOAD --------------------------------------------

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      dispatch({ field: "lightMode", value: theme as "dark" | "light" });
    }

    const apiKey = localStorage.getItem("apiKey");

    if (serverSideApiKeyIsSet) {
      dispatch({ field: "apiKey", value: "" });

      localStorage.removeItem("apiKey");
    } else if (apiKey) {
      dispatch({ field: "apiKey", value: apiKey });
    }

    const pluginKeys = localStorage.getItem("pluginKeys");
    if (serverSidePluginKeysSet) {
      dispatch({ field: "pluginKeys", value: [] });
      localStorage.removeItem("pluginKeys");
    } else if (pluginKeys) {
      dispatch({ field: "pluginKeys", value: pluginKeys });
    }

    if (window.innerWidth < 640) {
      dispatch({ field: "showChatBar", value: false });
      dispatch({ field: "showPromptBar", value: false });
    }

    const showChatBar = localStorage.getItem("showChatBar");
    if (showChatBar) {
      dispatch({ field: "showChatBar", value: showChatBar === "true" });
    }

    const showPromptBar = localStorage.getItem("showPromptBar");
    if (showPromptBar) {
      dispatch({ field: "showPromptBar", value: showPromptBar === "true" });
    }

    const folders = localStorage.getItem("folders");
    if (folders) {
      dispatch({ field: "folders", value: JSON.parse(folders) });
    }

    const prompts = localStorage.getItem("prompts");
    if (prompts) {
      dispatch({ field: "prompts", value: JSON.parse(prompts) });
    }

    const conversationHistory = localStorage.getItem("conversationHistory");
    if (conversationHistory) {
      const parsedConversationHistory: Conversation[] =
        JSON.parse(conversationHistory);
      const cleanedConversationHistory = cleanConversationHistory(
        parsedConversationHistory
      );

      dispatch({ field: "conversations", value: cleanedConversationHistory });
    }

    const selectedConversation = localStorage.getItem("selectedConversation");
    if (selectedConversation) {
      const parsedSelectedConversation: Conversation =
        JSON.parse(selectedConversation);
      const cleanedSelectedConversation = cleanSelectedConversation(
        parsedSelectedConversation
      );

      dispatch({
        field: "selectedConversation",
        value: cleanedSelectedConversation,
      });
    } else {
      dispatch({
        field: "selectedConversation",
        value: {
          id: uuidv4(),
          name: "New conversation",
          messages: [],
          model: OpenAIModels[defaultModelId],
          prompt: DEFAULT_SYSTEM_PROMPT,
          temperature: DEFAULT_TEMPERATURE,
          folderId: null,
          time: new Date().getTime(),
        },
      });
    }
  }, [
    defaultModelId,
    dispatch,
    serverSideApiKeyIsSet,
    serverSidePluginKeysSet,
  ]);

  return (
    <HomeContext.Provider
      value={{
        ...homeContextValue,
        handleNewConversation,
        handleCreateFolder,
        handleDeleteFolder,
        handleUpdateFolder,
        handleSelectConversation,
        handleUpdateConversation,
      }}
    >
      <Head>
        <title>Dengue Intelligent Chatbot Assistance</title>
        <meta
          name="description"
          content="DICA - Dengue Intelligent Chatbot Assistance"
        />
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {selectedConversation && (
        <main
          className={`flex h-screen w-screen flex-col text-sm text-white dark:text-white ${lightMode}`}
        >
          <div className="fixed top-0 w-full sm:hidden">
            <MobileNavbar
              selectedConversation={selectedConversation}
              onNewConversation={handleNewConversation}
            />
          </div>

          <div className="flex h-full w-full pt-[48px] sm:pt-0">
            <ChatBar />

            <div className="flex flex-1">
              <Chat stopConversationRef={stopConversationRef} />
            </div>

            <PromptBar />
          </div>
        </main>
      )}
    </HomeContext.Provider>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const defaultModelId =
    (process.env.DEFAULT_MODEL &&
      Object.values(OpenAIModelID).includes(
        process.env.DEFAULT_MODEL as OpenAIModelID
      ) &&
      process.env.DEFAULT_MODEL) ||
    fallbackModelID;

  let serverSidePluginKeysSet = false;

  const googleApiKey = process.env.GOOGLE_API_KEY;
  const googleCSEId = process.env.GOOGLE_CSE_ID;

  if (googleApiKey && googleCSEId) {
    serverSidePluginKeysSet = true;
  }

  return {
    props: {
      serverSideApiKeyIsSet: !!process.env.OPENAI_API_KEY,
      defaultModelId,
      serverSidePluginKeysSet,
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "chat",
        "sidebar",
        "markdown",
        "promptbar",
      ])),
    },
  };
};
