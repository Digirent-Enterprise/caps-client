export namespace DynamicHealthNS {
  export type Status = "Critical" | "Poor" | "Not Good" | "Fair" | "Good";

  //Params
  export type AddDynamicHealthParams = {
    status: Status;
    symptoms: string[];
  };

  //    Response
  export type DynamicHealthStatusesRes = {
    records?: number[];
    times?: string[];
  };

  export type CategorizedStatusRes = {
    [x: string]: number;
  };
}
