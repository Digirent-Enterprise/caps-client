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

import {
  ImmediateActions,
  LongTermActions,
} from "@/components/main-page-cta/constant";

const Component = memo(() => {
  const { t } = useTranslation("landing_page");

  const [tab, setTab] = useImmer<number>(0);

  const activeClass = useMemo(() => {
    return (
      "rounded-full bg-light-button-green dark:bg-dark-orange p-4 px-8 text-light-background-gray min-w-fit" +
      " dark:hover:bg-dark-orange-hover hover:bg-light-button-green-hover transition-colors font-bold"
    );
  }, []);
  const inactiveClass = useMemo(() => {
    return (
      "rounded-full bg-light-background-gray border border-light-gray p-4 px-8 opacity-75 border-4" +
      " text-light-blue-hover min-w-fit hover:bg-light-gray transition-colors font-bold dark:text-dark-white dark:bg-dark-gray-heavy dark:hover:bg-dark-gray"
    );
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
  return (
    <div className="mt-4 flex flex-col items-center justify-center bg-light-background-gray px-6 dark:bg-dark-gray-heavy md:px-12 lg:px-36">
      <div className="text-center text-2xl text-light-blue-hover dark:text-dark-orange md:text-3xl lg:text-4xl">
        {t("how_can_we_help_you")}
      </div>
      <div className="mt-2 flex flex-col gap-2 md:flex-row md:gap-5">
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
      <div className="mt-5 w-full lg:w-2/3">
        <div className="flex flex-wrap justify-center gap-4 text-light-blue-hover dark:text-dark-orange md:gap-10">
          {(tab === 0 ? ImmediateActions : LongTermActions).map((action) => {
            if (getActionIcon(action))
              return (
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="w-fit rounded-full border border-light-blue-hover bg-light-background-gray p-3 dark:border-dark-orange dark:bg-dark-gray-heavy md:p-5">
                    {getActionIcon(action)}
                  </div>
                  <div className="font-bold">{action}</div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
});

Component.displayName = "MainPageCTA";
export default Component;
