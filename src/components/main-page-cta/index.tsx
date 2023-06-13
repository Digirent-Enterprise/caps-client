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
    return "rounded-full bg-light-blue-hover dark:bg-dark-orange p-4 px-8 text-white min-w-fit hover:bg-main-green transition-colors font-bold";
  }, []);
  const inactiveClass = useMemo(() => {
    return "rounded-full bg-light-border-gray p-4 px-8 text-white min-w-fit hover:bg-main-green transition-colors font-bold";
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
    <div className="mt-4 flex w-full flex-col items-center justify-center bg-light-background-gray px-36 dark:bg-dark-blue">
      <div className="text-light-hover-blue text-4xl dark:text-dark-orange-heading">
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
        <div className="text-light-hover-blue flex w-full flex-row flex-wrap items-center justify-center gap-10 dark:text-dark-orange ">
          {(tab === 0 ? ImmediateActions : LongTermActions).map((action) => {
            if (getActionIcon(action))
              return (
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="w-fit rounded-full bg-light-border-gray p-5">
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
