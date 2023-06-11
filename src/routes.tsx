import { Icon } from "@chakra-ui/react";
import { IconUser } from "@tabler/icons-react";

import Profile from "@/pages/admin/profile";
import { IRoute } from "@/types/global/navigation";

const routes: IRoute[] = [
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={IconUser} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
];

export default routes;
