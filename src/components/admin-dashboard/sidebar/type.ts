import { IRoute } from "@/types/global/navigation";

export interface ISidebarResponsiveProps {
  routes: IRoute[];
}

export interface ISidebarProps extends ISidebarResponsiveProps {
  [x: string]: any;
}
