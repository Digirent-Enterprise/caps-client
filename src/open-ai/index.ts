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
