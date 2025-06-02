interface ModalType {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  onNext?: () => void;
  secondaryText: string;
  nextButtonText?: string;
  cancelButtonText?: string;
  load?: boolean;
  centerText?: React.ReactNode;
  hideBtn?: boolean;
}

export default ModalType;
