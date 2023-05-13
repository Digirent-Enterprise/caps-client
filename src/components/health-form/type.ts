export interface IHealthFormProps {
  age: string;
  height: string;
  weight: string;
  bloodPressure: string;
  bloodType: string;
  allergies: string[];
  medications: string[];
  hasSurgery: boolean;
  surgeryDescription: string;
  hasChronicIllness: boolean;
  chronicIllnessDescription: string;
  hasHereditaryDisease: boolean;
  familyHistoryDescription: string;
}

export const DefaultHealthForm: IHealthFormProps = {
  age: "",
  height: "",
  weight: "",
  bloodPressure: "",
  bloodType: "",
  allergies: [],
  medications: [],
  hasSurgery: false,
  surgeryDescription: "",
  hasChronicIllness: false,
  chronicIllnessDescription: "",
  hasHereditaryDisease: false,
  familyHistoryDescription: "",
};
