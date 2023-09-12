import React from "react";

import Image from "next/image";

import { IAboutSectionProps } from "@/components/about/about-section/type";

const Component = (props: IAboutSectionProps) => {
  const hasImage = Boolean(props.imageUrl);

  return (
    <div className="mb-4">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <p className="text-lg">{props.text}</p>

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
    </div>
  );
};

Component.displayName = "AboutDescription";
export default Component;
