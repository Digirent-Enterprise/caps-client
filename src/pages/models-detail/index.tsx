import React from "react";

import ModelCard from "src/shared/model-card";

const Component = () => {
  return (
    <ModelCard
      description={"Open"}
      title={"OpenAI"}
      imageUrl={
        "https://venturebeat.com/wp-content/uploads/2019/08/openai-logo-vertical-dimensional-purple-e1588267015132.png?w=1200&strip=all"
      }
    />
  );
};

Component.displayName = "ModelsDetail";
export default Component;
