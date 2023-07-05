import { memo, useMemo } from "react";

import {
  IconAddressBook,
  IconBrandWechat,
  IconChartCandle,
  IconChartCircles,
  IconChecklist,
  IconClockCheck,
  IconClockExclamation,
  IconCloudStar,
  IconHeartbeat,
  IconHeartHandshake,
  IconMedal,
  IconNotebook,
  IconPlant,
  IconProgressHelp,
  IconRibbonHealth,
  IconScanEye,
  IconShieldCheck,
  IconTrack,
  IconUrgent,
} from "@tabler/icons-react";
import { Icon } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";
import Accordion from "./accordion";
import ImageCardContainer from "./news-card";
import {
  ImmediateActions,
  LongTermActions,
} from "@/components/main-page-cta/constant";

const Component = memo(() => {
  const { t } = useTranslation("landing_page");

  const [tab, setTab] = useImmer<number>(0);

  const activeClass = useMemo(() => {
    return "rounded-full bg-light-button-green dark:bg-dark-orange p-4 px-8 text-light-background-gray min-w-fit dark:hover:bg-dark-orange-hover hover:bg-light-button-green-hover transition-colors font-bold";
  }, []);
  const inactiveClass = useMemo(() => {
    return "rounded-full bg-light-background-gray border border-light-gray p-4 px-8 text-light-blue-hover min-w-fit hover:bg-light-gray transition-colors font-bold dark:text-dark-white dark:bg-dark-gray-heavy dark:hover:bg-dark-gray";
  }, []);

  const iconClass = useMemo(() => {
    return "w-10 h-10 stroke-1 m-0";
  }, []);
  const getActionIcon = (action: string): React.ReactElement | null => {
    switch (action) {
      // Immediate Actions
      case t("chat"):
        return <IconBrandWechat className={iconClass} />;
      case t("suggestions"):
        return <IconHeartHandshake className={iconClass} />;
      case t("actions_now"):
        return <IconClockExclamation className={iconClass} />;
      case t("symptom_relief"):
        return <IconNotebook className={iconClass} />;
      case t("advice"):
        return <IconProgressHelp className={iconClass} />;
      case t("diagnosis"):
        return <IconScanEye className={iconClass} />;
      case t("prevent_severe"):
        return <IconShieldCheck className={iconClass} />;
      case t("exercise_plans"):
        return <IconAddressBook className={iconClass} />;
      case t("vital_monitoring"):
        return <IconChartCandle className={iconClass} />;
      case t("medication_tracking"):
        return <IconTrack className={iconClass} />;
      case t("nutrition_guidance"):
        return <IconPlant className={iconClass} />;
      case t("emergency_contact"):
        return <IconUrgent className={iconClass} />;
      //
      // // Long-Term Actions
      case t("health_tracking"):
        return <IconTrack className={iconClass} />;
      case t("visualization"):
        return <IconChartCircles className={iconClass} />;
      case t("health_management"):
        return <IconChecklist className={iconClass} />;
      case t("improved_life"):
        return <IconHeartbeat className={iconClass} />;
      case t("critical_illness"):
        return <IconRibbonHealth className={iconClass} />;
      case t("goal_setting"):
        return <IconMedal className={iconClass} />;
      case t("checkup_reminders"):
        return <IconClockCheck className={iconClass} />;
      case t("education_resources"):
        return <IconCloudStar className={iconClass} />;

      default:
        return null;
    }
  };
  const accordionItems = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Content for Accordion Item 3",
    },
  ];

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center bg-light-background-gray px-36 dark:bg-dark-gray-heavy">
      <div className="text-4xl text-light-blue-hover dark:text-dark-orange">
        {t("how_can_we_help_you")}
      </div>
      <div className="mt-2 flex flex-row gap-5">
        <button
          className={`${tab === 0 ? activeClass : inactiveClass}`}
          onClick={() => setTab(0)}
        >
          {t("immediate")}
        </button>

        <button
          className={`${tab === 1 ? activeClass : inactiveClass}`}
          onClick={() => setTab(1)}
        >
          {t("long_term")}
        </button>
      </div>
      <div className="mt-5 md:w-full lg:w-2/3">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-10 text-light-blue-hover dark:text-dark-orange">
          {(tab === 0 ? ImmediateActions : LongTermActions).map((action) => {
            if (getActionIcon(action))
              return (
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="w-fit rounded-full border border-light-blue-hover bg-light-background-gray p-5 dark:border-dark-orange dark:bg-dark-gray-heavy">
                    {getActionIcon(action)}
                  </div>
                  <div className="font-bold">{action}</div>
                </div>
              );
          })}
        </div>
        <div></div>
      </div>
      <div className="mt-5 from-1% h-90 w-70 flex items-center justify-center px-2">
        <div className="flex-40 relative rounded-3xl hover:opacity-100 transition duration-300">
          <div className="absolute top-0 left-0 z-10 p-4">
            <h1 className="mb-2 text-2xl font-bold text-white">SAVINGS</h1>
            <p className="mb-4 text-lg text-white">Singlife Account</p>
            <p className="mb-4 text-sm text-white">
              The insurance savings plan that gives you up to 3.5% p.a.* return
              on your first S$10,000. Save, spend, earn and be insured all in
              one app. *Terms and Conditions apply. For a limited time only.
            </p>
          </div>
          <img
            className="h-full w-full transform-gpu rounded-3xl object-cover transition-transform duration-300 hover:scale-110 hover:transform"
            src={"/static/landing/woman.png"}
            alt="Your Image"
          />
        </div>
        <div className="flex-40 relative rounded-3xl ml-20 hover:opacity-100 transition duration-300">
          <div className="absolute top-0 left-0 z-10 p-4">
            <h1 className="mb-2 text-2xl font-bold text-white">SAVINGS</h1>
            <p className="mb-4 text-lg text-white">Singlife Account</p>
            <p className="mb-4 text-sm text-white">
              The insurance savings plan that gives you up to 3.5% p.a.* return
              on your first S$10,000. Save, spend, earn and be insured all in
              one app. *Terms and Conditions apply. For a limited time only.
            </p>
          </div>
          <img
            className="h-full w-full transform-gpu rounded-3xl object-cover transition-transform duration-300 hover:scale-110 hover:transform"
            src={"/static/landing/kid.png"}
            alt="Your Image"
          />
        </div>
      </div>
      <div className="mt-5 container w-full mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Newsroom</h1>
        <ImageCardContainer />
      </div>
      <div className="mt-5 container w-full mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
});

Component.displayName = "MainPageCTA";
export default Component;
