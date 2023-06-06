export namespace UserNS {
  //generic
  type GenderType = "male" | "female" | "other";
  type RoleType = "user" | "admin";
  type StatusType = "active" | "deactivated";

  //request

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

  //response

  export type UserDetailResponse = {
    id: number;
    name: string;
    avatar: string;
    gender: GenderType;
    dob: string;
    age: number;
    email: string;
    role: RoleType;
    status: StatusType;
    firstLogin: boolean;
    createdAt: string;
  };
}
