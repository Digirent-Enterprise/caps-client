import { IQuestion } from "@/components/faq/type";

export const questions: IQuestion[] = [
  {
    id: 1,
    title: "general-information",
  },
  {
    id: 2,
    title: "account-and-profile",
  },
  {
    id: 3,
    title: "supported-features",
  },
  {
    id: 4,
    title: "privacy-concerns-and-security",
  },
  {
    id: 5,
    title: "dica-release-notes",
  },
];

export const breadcrumbItems = [
  { label: "home", href: "/" },
  { label: "DICA", href: "/faq" },
  { label: "faq" },
];
