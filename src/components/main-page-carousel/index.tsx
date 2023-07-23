import { memo } from "react";

import { useTranslation } from "next-i18next";
import { Carousel } from "react-responsive-carousel";

import styles from "./main-page-carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Component = memo(() => {
  const { t } = useTranslation("landing_page");
  return (
    <Carousel
      className={`sm:max-h-[10rem] md:max-h-[20rem] lg:max-h-[30rem] ${styles.main_page_carousel}`}
      // showIndicators={false}
      showArrows={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      autoPlay={false}
      showStatus={false}
    >
      <div className="flex w-full items-center justify-center bg-light-background-gray dark:bg-dark-gray-heavy lg:px-36">
        <div className="from-1% relative flex min-h-max w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%  to-emerald-500 to-100% px-2	">
          <img
            className="Cmd:w-full absolute left-0 top-[20%] h-auto sm:w-[80%] sm:pb-2 md:pb-5 lg:w-1/3 lg:pb-10 "
            src={"/static/carousel/docker_cover.png"}
          />
          <div className="absolute right-2 top-1/4 lg:w-2/3">
            <div className="md:text-md w-[10rem] text-white sm:w-[30rem] sm:text-sm md:w-[30rem] lg:w-2/3 lg:text-4xl">
              {t("dica_is_able")}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center bg-light-background-gray px-36  dark:bg-dark-gray-heavy">
        <div className="from-1% relative flex min-h-max w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%  to-emerald-500 to-100% px-2	">
          <img
            className="absolute left-0 top-[20%] h-auto sm:w-[80%] sm:pb-2 md:w-full md:pb-5 lg:w-1/3 lg:pb-10 "
            src={"/static/carousel/female_docker.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">{t("moniter_progress")}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center bg-light-background-gray px-36  dark:bg-dark-gray-heavy">
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
