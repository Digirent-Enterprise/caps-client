import React from "react";

import { IBreakingNewsHeadlineProps } from "@/components/news/breaking-news-headline/type";

const Component: React.FC<IBreakingNewsHeadlineProps> = ({
  headline,
  onClick,
}) => {
  return (
    <div className="bg-red px-4 py-2 font-semibold text-white">
      <h2 className="text-xl">{headline}</h2>
      <button className="mt-2 text-sm underline" onClick={onClick}>
        Read more
      </button>
    </div>
  );
};

Component.displayName = "BreakingNewsHeadline";

export default Component;
