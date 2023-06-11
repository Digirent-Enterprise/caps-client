import { IRoute } from "@/types/globals/navigation";

export interface ISidebarResponsiveProps {
  routes: IRoute[];
}

export interface ISidebarProps extends ISidebarResponsiveProps {
  [x: string]: any;
}
