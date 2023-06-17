import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { IWeatherData } from "@/components/weather-report/type";
import useDevice from "@/hooks/useDevice";
import { showToast } from "@/utils/toast";

const Component = (props: { classes?: string }) => {
  const { t } = useTranslation("health_record");
  const { classes } = props;
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const { isMobile } = useDevice();
  const iconSize = isMobile ? 40 : 60;
  const temperatureFontSize = isMobile
    ? "text-sm text-light-white"
    : "text-md text-light-white";
  const locationFontSize = isMobile
    ? "text-sm text-light-white"
    : "text-base text-light-white";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API;
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data: IWeatherData) => {
              setWeather(data);
            });
        },
        (error: GeolocationPositionError) => {
          showToast("error", t("user_denied"));
        }
      );
    } else {
      showToast("error", t("geolocation"));
    }
  }, []);

  if (!weather) {
    return <div>{t("loading")}</div>;
  }

  const temperature = Math.round(weather?.main?.temp - 273.15);
  const weatherCondition =
    weather?.weather && weather?.weather.length > 0
      ? weather?.weather[0]?.description
      : "";
  const location = weather?.name;
  const iconUrl =
    weather?.weather && weather?.weather.length > 0
      ? `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`
      : "";

  return (
    <div className={`flex items-center ${classes}`}>
      <div className="mr-4">
        <img
          src={iconUrl}
          alt={weatherCondition}
          width={iconSize}
          height={iconSize}
        />
      </div>
      <div>
        <div className={temperatureFontSize}>
          {t("location")} {temperature} °C
        </div>
        <div className={locationFontSize}>
          {t("location")} {location}
        </div>
      </div>
    </div>
  );
};

Component.displayName = "Weather";

export default Component;
