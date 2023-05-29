import React from "react";

import Image from "next/image";

import { IFeatureNewsProps } from "@/components/news/feature-news/type";

const Component: React.FC<IFeatureNewsProps> = ({
  image,
  imageAlt,
  description,
  newsTitle,
  url,
}) => {
  const _handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="mb-2">
      <div className="relative h-80 hover:bg-gray-600" onClick={_handleClick}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      </div>
      <p className="mt-2 text-2xl font-semibold">{description}</p>
      <hr className="my-4 border-gray-300" />
      <h3 className="text-gray-600">{newsTitle}</h3>
    </div>
  );
};

Component.displayName = "FeatureNews";
export default Component;
