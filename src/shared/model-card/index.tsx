import React from "react";

import { IModelCardProps } from "@/shared/model-card/type";

const Component: React.FC<IModelCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex items-center rounded-md bg-white p-4 shadow-md">
      <img className="mr-4 w-1/3" src={imageUrl} alt={`${title} Image`} />
      <div className="w-2/3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

Component.displayName = "ModelCard";
export default Component;
