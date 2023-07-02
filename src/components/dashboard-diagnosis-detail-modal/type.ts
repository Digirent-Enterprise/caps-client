export interface IDashboardDiagnosisDetail {
  open: boolean;
  item: DiagnosisNS.Diagnosis;
  img?: string;
  onClose: () => void;
}
