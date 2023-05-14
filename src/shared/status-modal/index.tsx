import React from "react";

import {
  IconCheck,
  IconExclamationMark,
  IconInfoSmall,
} from "@tabler/icons-react";
import Image from "next/image";
import Modal from "react-modal";

import Button from "@/core/button";
import { CustomStyle } from "@/shared/status-modal/constant";
import { IConfirmationModalProps } from "@/shared/status-modal/type";
import { renderFilePath } from "@/utils/system";

const Component = React.memo((props: IConfirmationModalProps) => {
  const getConfirmationModalTypeStyle = (type: string) => {
    switch (type) {
      case "success":
        return {
          color: "green",
        };
      case "warning":
        return {
          color: "yellow",
        };
      case "error":
        return {
          color: "red",
        };
      case "info":
        return {
          color: "blue",
        };
      default:
        return {
          color: "gray",
        };
    }
  };

  const {
    type,
    isOpen,
    onClose,
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    secondButton = false,
  } = props;

  const { color } = getConfirmationModalTypeStyle(type);

  const getConfirmationModalIcon = () => {
    switch (type) {
      case "success":
        return <IconCheck color={color} />;
      case "warning":
        return <IconExclamationMark color={color} />;
      case "error":
        return <IconExclamationMark color={color} strokeWidth={10} />;
      case "info":
        return <IconInfoSmall color={color} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      className="absolute bg-darker-blue"
      onRequestClose={onClose}
      style={CustomStyle}
    >
      <div className="flex w-full items-center justify-center">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
          alt="modal_img"
          src={"/static/modal_img/status_modal.svg"}
        />
      </div>
      <h2 className="my-5 text-lg font-bold text-white">{title}</h2>
      <p className="mb-5 mt-1 text-white">{description}</p>
      <div className="flex flex-row flex-nowrap items-end justify-end gap-2">
        {secondButton && onSecondaryButtonClick && (
          <div className="w-1/3">
            <Button onClick={onSecondaryButtonClick} mode="secondary">
              {secondaryButtonText}
            </Button>
          </div>
        )}
        <div className="w-1/5">
          <Button onClick={onPrimaryButtonClick} mode="primary">
            {primaryButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "ConfirmationModal";

export default Component;
