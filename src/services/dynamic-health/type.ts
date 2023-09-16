export namespace DynamicHealthNS {
  export type Status = "Critical" | "Poor" | "Not Good" | "Fair" | "Good";

  export type AddDynamicHealthParams = {
    status: Status;
    symptoms: string[];
  };

  export type DynamicHealthStatusesRes = {
    records?: number[];
    times?: string[];
  };

  export type CategorizedStatusRes = {
    [x: string]: number;
  };

  export type MostUserSymptomRankingRes = string[];
}
