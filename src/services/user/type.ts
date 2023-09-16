import { RoleTypes } from "@/types/context/with-auth-context";

export namespace UserNS {
  type GenderType = "male" | "female" | "other";
  type RoleType = "user" | "admin";
  type StatusType = "active" | "deactivated";

  export type UpdateUserReq = Partial<{
    id: number;
    name: string;
    gender: GenderType;
    dob: string;
    age: number;
    email: string;
    firstLogin: boolean;
    createdAt: string;
  }>;

  export type UserDetailResponse = {
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
  };
}
