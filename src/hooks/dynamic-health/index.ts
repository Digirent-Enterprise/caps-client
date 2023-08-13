import { useContext } from "react";

import { useImmer } from "use-immer";

import { LoadingContext } from "@/contexts/loading-context";
import { DynamicHealthService } from "@/services/dynamic-health";
import { DynamicHealthNS } from "@/services/dynamic-health/type";
import { showToast } from "@/utils/toast";

type DynamicHealthResult = {
  addDynamicHealth: (x: DynamicHealthNS.AddDynamicHealthParams) => void;
  myStatuses: DynamicHealthNS.DynamicHealthStatusesRes;
  getDynamicHealth: () => void;
  getCategorizedStatus: () => void;
  categorizedStatus: DynamicHealthNS.CategorizedStatusRes;
  commonSymptoms: DynamicHealthNS.CategorizedStatusRes;
  getCommonSymptoms: () => void;
  mostUserSymptomRanking: DynamicHealthNS.MostUserSymptomRankingRes;
  getMostUserSymptomRanking: () => void;
};

const useDynamicHealth = () => {
  const { setLoading } = useContext(LoadingContext);
  const [myStatuses, setMyStatuses] =
    useImmer<DynamicHealthNS.DynamicHealthStatusesRes>({});

  const [categorizedStatus, setCategorizedStatus] =
    useImmer<DynamicHealthNS.CategorizedStatusRes>({});
  const [commonSymptoms, setCommonSymptoms] =
    useImmer<DynamicHealthNS.CategorizedStatusRes>({});
  const [mostUserSymptomRanking, setMostUserSymptomRanking] =
    useImmer<DynamicHealthNS.MostUserSymptomRankingRes>([]);

  const addDynamicHealth = async (
    data: DynamicHealthNS.AddDynamicHealthParams
  ) => {
    try {
      setLoading(true);
      const response = await DynamicHealthService.addDynamicHealth(data);
      await getDynamicHealth();
      setLoading(false);
      showToast("success", "Update your health status successfully!");
    } catch (error) {
      setLoading(false);
    }
  };
  const getDynamicHealth = async () => {
    try {
      setLoading(true);
      const response: DynamicHealthNS.DynamicHealthStatusesRes =
        await DynamicHealthService.getDynamicHealthMyStatuses();
      setMyStatuses(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getCategorizedStatus = async () => {
    try {
      setLoading(true);
      const response: DynamicHealthNS.CategorizedStatusRes =
        await DynamicHealthService.getCategorizedStatuses();
      setCategorizedStatus(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  const getCommonSymptoms = async () => {
    try {
      setLoading(true);
      const response: DynamicHealthNS.CategorizedStatusRes =
        await DynamicHealthService.getCommonSymptoms();
      setCommonSymptoms(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const getMostUserSymptomRanking = async () => {
    try {
      setLoading(true);
      const response: DynamicHealthNS.MostUserSymptomRankingRes =
        await DynamicHealthService.getMostUserSymptomRanking();
      setMostUserSymptomRanking(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    addDynamicHealth,
    myStatuses,
    getDynamicHealth,
    getCategorizedStatus,
    categorizedStatus,
    getCommonSymptoms,
    commonSymptoms,
    getMostUserSymptomRanking,
    mostUserSymptomRanking,
  } as DynamicHealthResult;
};

export default useDynamicHealth;
