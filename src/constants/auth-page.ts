import { LoginForm, RegisterForm } from "@/types/pages/auth-page";

export const DefaultLoginForm: LoginForm = {
  email: "",
  password: "",
};

export const DefaultRegisterForm: RegisterForm = {
  name: "",
  dob: "",
  password: "",
  confirmPassword: "",
  gender: "male",
  email: "",
};
