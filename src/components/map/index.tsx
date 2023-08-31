import { useTranslation } from "next-i18next";

const Component = () => {
  const { t } = useTranslation("map");
  return (
    <div className="flex flex-col items-center space-y-5 rounded-md border border-neutral-200 p-6 py-4 dark:border-neutral-700 lg:items-start lg:p-20">
      <div className=" text-xl font-medium lg:text-3xl">
        {t("medical_destination")}
      </div>
      <iframe
        height="450"
        className="w-full rounded-md border-0"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/search?q=Doctors%20near%20me&key=AIzaSyDzXRnb98ND-kw4Tv7G1-cZliEKgO-JAnw"
      ></iframe>
    </div>
  );
};

Component.displayName = "Map";
export default Component;
