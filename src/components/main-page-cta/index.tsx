import { memo, ReactDOM, useMemo } from "react";

import {
  IconAddressBook,
  IconArrowGuide,
  IconBrandWechat,
  IconChartAreaLine,
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
import { useImmer } from "use-immer";

import {
  ImmediateActions,
  LongTermActions,
} from "@/components/main-page-cta/constant";

const Component = memo(() => {
  const [tab, setTab] = useImmer<number>(0);

  const activeClass = useMemo(() => {
    return "rounded-full bg-main-blue p-4 px-8 text-white min-w-fit hover:bg-main-green transition-colors font-bold";
  }, []);
  const inactiveClass = useMemo(() => {
    return "rounded-full bg-gray-300 p-4 px-8 text-white min-w-fit hover:bg-main-green transition-colors font-bold";
  }, []);

  const iconClass = useMemo(() => {
    return "w-10 h-10 stroke-1 m-0";
  }, []);
  const getActionIcon = (action: string): React.ReactElement => {
    switch (action) {
      // Immediate Actions
      case "Chat":
        return <IconBrandWechat className={iconClass} />;
      case "Suggestions":
        return <IconHeartHandshake className={iconClass} />;
      case "Actions Now":
        return <IconClockExclamation className={iconClass} />;
      case "Symptom Relief":
        return <IconNotebook className={iconClass} />;
      case "Advice":
        return <IconProgressHelp className={iconClass} />;
      case "Diagnosis":
        return <IconScanEye className={iconClass} />;
      case "Prevent Severe":
        return <IconShieldCheck className={iconClass} />;
      case "Exercise Plans":
        return <IconAddressBook className={iconClass} />;
      case "Vital Monitoring":
        return <IconChartCandle className={iconClass} />;
      case "Medication Tracking":
        return <IconTrack className={iconClass} />;
      case "Nutrition Guidance":
        return <IconPlant className={iconClass} />;
      case "Emergency Contacts":
        return <IconUrgent className={iconClass} />;
      //
      // // Long-Term Actions
      case "Health Tracking":
        return <IconTrack className={iconClass} />;
      case "Visualization":
        return <IconChartCircles className={iconClass} />;
      case "Health Management":
        return <IconChecklist className={iconClass} />;
      case "Improved Life":
        return <IconHeartbeat className={iconClass} />;
      case "Critical Illness":
        return <IconRibbonHealth className={iconClass} />;
      case "Goal Setting":
        return <IconMedal className={iconClass} />;
      case "Check-up Reminders":
        return <IconClockCheck className={iconClass} />;
      case "Education Resources":
        return <IconCloudStar className={iconClass} />;

      default:
        return null;
    }
  };
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center px-36">
      <div className="text-4xl text-black">How can we help you?</div>
      <div className="mt-2 flex flex-row gap-5">
        <button
          className={`${tab === 0 ? activeClass : inactiveClass}`}
          onClick={() => setTab(0)}
        >
          Immediate
        </button>

        <button
          className={`${tab === 1 ? activeClass : inactiveClass}`}
          onClick={() => setTab(1)}
        >
          Long-term
        </button>
      </div>
      <div className="mt-5 md:w-full lg:w-2/3">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-10 ">
          {(tab === 0 ? ImmediateActions : LongTermActions).map((action) => {
            if (getActionIcon(action))
              return (
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="w-fit rounded-full bg-gray-300 p-5">
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
