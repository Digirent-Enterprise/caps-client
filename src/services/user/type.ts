export namespace UserNS {
  //generic
  type GenderType = "male" | "female" | "other";
  type RoleType = string[];

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
    gender: GenderType;
    dob: string;
    age: number;
    email: string;
    roles: RoleType;
    createdAt: string;
  };
}
