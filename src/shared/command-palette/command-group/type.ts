export interface ICommand {
  group: string;
  name: string;
  shortcut: string;
}

export interface ICommandProps {
  commands: ICommand[];
  group: string;
}
