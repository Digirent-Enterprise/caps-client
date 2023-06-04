export interface IUserType {
  id: string | number;
  name?: string;
  email?: string;
  role?: string;
  status: "active" | "paused" | "vacation";
  age?: string;
  avatar?: string;
  [key: string]: any; // Add index signature
}
