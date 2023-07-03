namespace DiagnosisNS {
  export type Diagnosis = {
    description: string;
    createdAt: string;
  };

  export type CouldGetDiagnosis = {
    couldDiagnosis: boolean,
  }

  export type DiagnosisResults = Diagnosis[];
}
