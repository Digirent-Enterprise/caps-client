export interface ISharingModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description: string;
  conversationName: string;
  updatedAt: string;
}
