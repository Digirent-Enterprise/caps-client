import OpenAI from "openai";

let openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const getAI = () => {
  if (openai) return openai;
  else
    return new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
};
