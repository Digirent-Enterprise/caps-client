import React from "react";

import {
  IconCheck,
  IconExclamationMark,
  IconInfoSmall,
} from "@tabler/icons-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Modal from "react-modal";

import Button from "@/core/button";
import { CustomStyle } from "@/shared/status-modal/constant";
import { IConfirmationModalProps } from "@/shared/status-modal/type";

const Component = React.memo((props: IConfirmationModalProps) => {
  const { t } = useTranslation("home");

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
    isSecondButton = true,
    username,
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
      className="absolute bg-light-background-gray dark:bg-dark-gray-heavy"
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
      <h2 className="my-5 text-lg font-bold text-light-blue-hover dark:text-dark-white">
        {t(title)}
      </h2>
      <p className="mb-5 mt-1 text-light-blue-hover dark:text-dark-white">
        {t(description, { username })}
      </p>
      <div className="flex flex-row flex-nowrap items-end justify-end gap-2">
        {isSecondButton && onSecondaryButtonClick ? (
          <div className="w-1/3">
            <Button onClick={onSecondaryButtonClick} mode="secondary">
              {t(secondaryButtonText)}
            </Button>
          </div>
        ) : null}
        <div className="w-1/5">
          <Button onClick={onPrimaryButtonClick} mode="primary">
            {t(primaryButtonText)}
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "StatusModal";

export default Component;
