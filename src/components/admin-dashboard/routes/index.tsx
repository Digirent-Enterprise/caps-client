import { Icon } from "@chakra-ui/react";
import {
  IconChartBar,
  IconUser,
  IconBell,
  IconDatabase,
} from "@tabler/icons-react";

import Dashboard from "@/pages/admin/dashboard";
import Management from "@/pages/admin/management";
import Notifications from "@/pages/admin/notifications";
import Profile from "@/pages/admin/profile";

import { IRoute } from "@/types/globals/navigation";

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/dashboard",
    icon: <Icon as={IconChartBar} width="20px" height="20px" color="inherit" />,
    component: Dashboard,
  },
  {
    name: "Management",
    layout: "/admin",
    path: "/management",
    icon: <Icon as={IconDatabase} width="20px" height="20px" color="inherit" />,
    component: Management,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={IconUser} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Notification",
    layout: "/admin",
    path: "/notification",
    icon: <Icon as={IconBell} width="20px" height="20px" color="inherit" />,
    component: Notifications,
  },
];

export default routes;
