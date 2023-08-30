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
