import React from "react";

import Image from "next/image";
import { useTranslation } from "next-i18next";

import { IAboutSectionProps } from "@/components/about/about-section/type";

const Component = (props: IAboutSectionProps) => {
  const { t } = useTranslation("about");

  const hasImage = Boolean(props.imageUrl);

  return (
    <div className="mb-4">
      <h1 className="text-4xl font-bold">{t(props.title)}</h1>
      <p className="mt-2 text-lg">{t(props.text)}</p>

      <div className="mt-4 flex justify-center">
        {hasImage ? (
          <Image
            src={props.imageUrl}
            alt={props.imageAlt}
            width={500}
            height={300}
          />
        ) : null}
      </div>
      {hasImage && props.imageFigureText ? (
        <p className="mt-2 flex justify-center text-sm text-gray-600">
          {props.imageFigureText}
        </p>
      ) : null}

      {props.listItems && props.listItems.length > 0 ? (
        <ul className="ml-6 mt-2 list-disc">
          {props.listItems.map((item, index) => (
            <li key={index} className="text-lg">
              <strong>{item.label}</strong> {item.content}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

Component.displayName = "AboutDescription";
export default Component;
