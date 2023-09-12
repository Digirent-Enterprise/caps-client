import { memo } from "react";

import MainPageCarousel from "@/components/main-page-carousel";
import MainPageCta from "@/components/main-page-cta";
import withLayout from "@/hoc/withLayout";

const Component = memo(() => {
  return (
    <div className="mt-20">
      <MainPageCarousel />
      <MainPageCta />
    </div>
  );
});

Component.displayName = "LandingPage";
export default withLayout(Component);
