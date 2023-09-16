import { LoginFormType, RegisterFormType } from "@/types/pages/auth-page";

export const DefaultLoginForm: LoginFormType = {
  email: "",
  password: "",
};

export const DefaultRegisterForm: RegisterFormType = {
  name: "",
  dob: "",
  password: "",
  confirmPassword: "",
  gender: "male",
  email: "",
};
