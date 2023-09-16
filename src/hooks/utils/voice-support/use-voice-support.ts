import { useContext } from "react";

import { LoadingContext } from "@/contexts/loading-context";

type VoiceSupportResult = {
  speechToText: (x: any) => string;
};

const useVoiceSupport = (): VoiceSupportResult => {
  const { setLoading } = useContext(LoadingContext);

  const speechToText = () => {
    return "hello world";
  };

  return {
    speechToText,
  } as VoiceSupportResult;
};

export default useVoiceSupport;
