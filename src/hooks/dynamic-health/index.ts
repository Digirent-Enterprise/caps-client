import { useContext, useState } from "react";

import { useImmer } from "use-immer";

import { LoadingContext } from "@/contexts/loading-context";
import { DynamicHealthService } from "@/services/dynamic-health";
import { DynamicHealthNS } from "@/services/dynamic-health/type";
import { showToast } from "@/utils/toast";

type DynamicHealthResult = {
  addDynamicHealth: (x: DynamicHealthNS.AddDynamicHealthParams) => void;
  myStatuses: string[];
  getDynamicHealth: () => void;
};

const useDynamicHealth = () => {
  const { setLoading } = useContext(LoadingContext);
  const [myStatuses, setMyStatuses] = useImmer<number[]>([]);
  const addDynamicHealth = async (
    data: DynamicHealthNS.AddDynamicHealthParams
  ) => {
    try {
      setLoading(true);
      const response = await DynamicHealthService.addDynamicHealth(data);
      setLoading(false);
      showToast("success", "Update your health status successfully!");
    } catch (error) {
      setLoading(false);
    }
  };
  const getDynamicHealth = async () => {
    try {
      setLoading(true);
      const response: number[] =
        await DynamicHealthService.getDynamicHealthMyStatuses();
      setMyStatuses(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    addDynamicHealth,
    myStatuses,
    getDynamicHealth,
  } as DynamicHealthResult;
};

export default useDynamicHealth;
