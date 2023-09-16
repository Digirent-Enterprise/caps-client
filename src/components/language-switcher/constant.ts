import { ILanguageOption } from "@/components/language-switcher/type";
import { Language } from "@/types/enum/common/language";

export const supportedLanguages: ILanguageOption[] = [
  {
    locale: Language.VIETNAMESE,
    name: "Tiếng Việt",
  },
  {
    locale: Language.ENGLISH,
    name: "English",
  },
];
