import { ReactNode } from "react";

type GenderType = "male" | "female" | "other";
type RoleType = "user" | "admin" | "doctor";
export type RoleTypes = RoleType[];
type StatusType = "active" | "deactivated";

export interface IUser {
  id: number;
  name: string;
  avatar: string;
  gender: GenderType;
  dob: string;
  age: number;
  email: string;
  roles: RoleTypes;
  status: StatusType;
  firstLogin: boolean;
  createdAt: string;
}

export interface AuthContextData {
  user: IUser | null;
  signIn: (user: IUser) => void;
  signOut: () => void;
  loading: boolean;
}

export interface IAuthContextProps {
  children: ReactNode;
}
