import { memo } from "react";

import { useTranslation } from "next-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Component = memo(() => {
  const { t } = useTranslation("landing_page");
  return (
    <Carousel
      // showIndicators={false}
      showArrows={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
    >
      <div className="mt-2 flex w-full items-center justify-center bg-light-background-gray px-36  dark:bg-dark-blue">
        <div className="from-1% flex h-full w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%  to-emerald-500 to-100% px-2	">
          <img
            className="h-auto pb-10 sm:w-full md:w-full lg:w-1/3 "
            src={"/static/carousel/docker_cover.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">{t("dica_is_able")}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center bg-light-background-gray px-36  dark:bg-dark-blue">
        <div className="from-1% flex  h-full w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%	 to-emerald-500 to-100%	 px-2">
          <img
            className="h-auto pb-10 sm:w-full md:w-full lg:w-1/3 "
            src={"/static/carousel/female_docker.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">{t("moniter_progress")}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center bg-light-background-gray px-36  dark:bg-dark-blue">
        <div className="from-1% flex  h-full w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%	 to-emerald-500 to-100%	 px-2	">
          <img
            className="h-auto pb-10 sm:w-full md:w-full lg:w-1/3 "
            src={"/static/carousel/bot.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">{t("dica_is_accessible")}</div>
          </div>
        </div>
      </div>
    </Carousel>
  );
});

Component.displayName = "MainPageCarousel";
export default Component;
