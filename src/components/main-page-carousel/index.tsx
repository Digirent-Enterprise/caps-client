import { memo } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Component = memo(() => {
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
      <div className="mt-2 flex w-full items-center justify-center  px-36">
        <div className="from-1% flex h-full w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%  to-emerald-500 to-100% px-2	">
          <img
            className="h-auto pb-10 sm:w-full md:w-full lg:w-1/3 "
            src={"/static/carousel/docker_cover.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">
              DICA is able to help you track symptoms and access personalized
              health recommendations.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center  px-36">
        <div className="from-1% flex  h-full w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%	 to-emerald-500 to-100%	 px-2">
          <img
            className="h-auto pb-10 sm:w-full md:w-full lg:w-1/3 "
            src={"/static/carousel/female_docker.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">
              Monitor progress and visualize health data is the best approach to
              protect your health.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center  px-36">
        <div className="from-1% flex  h-full w-full items-center justify-center rounded-3xl rounded-b-[20%] bg-gradient-to-r from-[#169cd6] via-sky-500 via-30%	 to-emerald-500 to-100%	 px-2	">
          <img
            className="h-auto pb-10 sm:w-full md:w-full lg:w-1/3 "
            src={"/static/carousel/bot.png"}
          />
          <div className="w-1/3 text-left">
            <div className="text-4xl text-white	">
              DICA is accessible on smartphones, tablets, and computers anywhere
              with internet.
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
});

Component.displayName = "MainPageCarousel";
export default Component;
