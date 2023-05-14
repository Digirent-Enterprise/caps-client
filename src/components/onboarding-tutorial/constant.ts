export const options = {
  arrowColor: "#FFF",
  backgroundColor: "#FFF",
  overlayColor: "rgba(0, 0, 0, 0.5)",
  primaryColor: "#333",
  textColor: "#333",
  zIndex: 10000,
};

export const DefaultGuideSteps = [
  {
    target: '[data-tour="step1"]',
    content: "Create new conversation to start asking question",
    disableBeacon: true,
  },
  {
    target: '[data-tour="step2"]',
    content:
      "This will show the model type that you will be using in this conversation",
    disableBeacon: true,
  },
  {
    target: '[data-tour="step3"]',
    content: "The current weather on your location will show here",
    disableBeacon: true,
  },
  {
    target: '[data-tour="step4"]',
    content: "Your chat message will show here",
    disableBeacon: true,
  },
  {
    target: '[data-tour="step5"]',
    content: "You can start asking the question here",
    disableBeacon: true,
  },
];
