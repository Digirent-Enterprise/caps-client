export interface IAboutSectionProps {
  title: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  imageFigureText?: string;
  listItems?: { label?: string; content: string }[];
}
