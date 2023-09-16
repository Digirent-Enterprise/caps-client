import { memo } from "react";

import MainPageCarousel from "@/components/landing-page/landing-page-carousel";
import MainPageCta from "@/components/landing-page/landing-page-cta";
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
