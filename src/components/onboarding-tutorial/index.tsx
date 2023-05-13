import React, { useContext, useMemo, useState } from "react";

import { useRouter } from "next/router";
import Joyride, { CallBackProps } from "react-joyride";

import axios from "@/axios";
import { options } from "@/components/onboarding-tutorial/constant";
import { IOnboardingStepProps } from "@/components/onboarding-tutorial/type";
import { AuthContext } from "@/contexts/auth-context";

const Component: React.FC<IOnboardingStepProps> = ({ steps }) => {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;

    if (status === "finished" || status === "skipped") {
      setRun(false);
      setStepIndex(0);
    }

    if (type === "step:after" && action === "next") {
      setStepIndex(index + 1);
    }

    if (type === "step:after" && action === "prev") {
      setStepIndex(index - 1);
    }

    if (action === "skip" || action === "close") {
      setRun(false);
      _handleUpdateUser();
      setStepIndex(0);
    }
  };

  const shouldRun = useMemo(() => {
    return router.pathname === "/" && user?.firstLogin;
  }, [router, user]);

  const _handleUpdateUser = async () => {
    await axios.put("/users/update", { firstLogin: false });
  };

  return (
    <Joyride
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      run={!!shouldRun}
      stepIndex={stepIndex}
      callback={handleJoyrideCallback}
      styles={{
        options: options,
        buttonClose: {
          display: "none",
        },
      }}
      locale={{
        back: "Back",
        close: "Close",
        last: "Finish",
        next: "Next",
        skip: "Skip",
      }}
      disableOverlayClose
      disableScrollParentFix
      disableCloseOnEsc
    />
  );
};

Component.displayName = "OnboardingTutorial";

export default Component;
