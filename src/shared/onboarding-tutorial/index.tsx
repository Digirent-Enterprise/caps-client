import React, { FC, useContext, useMemo, useState } from "react";

import { useRouter } from "next/router";
import Joyride, { CallBackProps } from "react-joyride";

import { AuthContext } from "@/contexts/auth-context";
import useUser from "@/hooks/user/useUser";
import {
  DefaultGuideSteps,
  options,
} from "@/shared/onboarding-tutorial/constant";

const MAX_STEP = DefaultGuideSteps.length;

const Component: FC = () => {
  const [run, setRun] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const { updateUser } = useUser();
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;

    if (status === "finished" || status === "skipped") {
      setRun(false);
      _handleUpdateUserFirstLogin();
    }

    if (type === "step:after" && action === "next") {
      setStepIndex(index + 1);
    }

    if (type === "step:after" && action === "prev") {
      setStepIndex(index - 1);
    }

    if (action === "skip" || action === "close") {
      setRun(false);
      setStepIndex(0);
    }
  };

  const shouldRun = useMemo(() => {
    return router.pathname === "/" && user?.firstLogin;
  }, [router, user]);

  const _handleUpdateUserFirstLogin = async () => {
    await updateUser({ firstLogin: false });
  };

  return (
    <Joyride
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={DefaultGuideSteps}
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
