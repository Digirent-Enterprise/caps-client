import { ICommand } from "@/shared/command-palette/command-group/type";

export const commands: ICommand[] = [
  {
    name: "Create new conversation",
    shortcut: "",
    group: "Conversation",
  },
  {
    name: "Open profile",
    shortcut: "O then P",
    group: "Navigation",
  },
  {
    name: "Go to settings",
    shortcut: "G then S",
    group: "Navigation",
  },
  {
    name: "Change interface theme",
    shortcut: "",
    group: "Settings",
  },
  { name: "Change language", shortcut: "", group: "Settings" },
  { name: "Log out", shortcut: "Alt ⇧ Q", group: "Account" },
];
