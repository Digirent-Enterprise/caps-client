import { Language } from "@/types/enum/common/language";

export type LanguageType = Language.VIETNAMESE | Language.ENGLISH;

export interface ILanguageOption {
  locale: LanguageType;
  name: string;
}
