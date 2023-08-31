import React, { useCallback, useEffect, useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";

import { tutorialSteps } from "@/components/tutorial-step/constant";

const Component = () => {
  const [tutorialStep, setTutorialStep] = useState<number>(0);

  const _handleStepChange = useCallback(() => {
    setTutorialStep(
      (prevTutorialStep) => (prevTutorialStep + 1) % tutorialSteps.length
    );
  }, [tutorialSteps.length]);

  useEffect(() => {
    const interval = setInterval(_handleStepChange, 5000);
    return () => clearInterval(interval);
  }, [_handleStepChange]);

  return (
    <div className="xs:p-10 flex h-full flex-col items-center justify-center p-5">
      <div className="grid gap-4">
        <p className="mt-2 text-center text-sm font-light leading-relaxed text-gray-500 md:text-base">
          How it works
        </p>
        <h2 className="mb-4 text-center text-3xl font-semibold text-[#1A2238] md:text-4xl">
          {`It's super simple`}
        </h2>
        <Player
          autoplay
          loop
          src={tutorialSteps[tutorialStep].animation}
          style={{ height: "40vh", width: "100%" }}
        />
      </div>
      <p className="my-10 text-center text-xl font-light text-gray-500">
        {tutorialSteps[tutorialStep].text}
      </p>
    </div>
  );
};

Component.displayName = "TutorialStep";
export default Component;
