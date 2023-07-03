import { useEffect, useState } from "react";

import { Portal, Box, useDisclosure } from "@chakra-ui/react";

import FooterAdmin from "@/components/admin-dashboard/footer";
import NavbarAdmin from "@/components/admin-dashboard/navbar";
import routes from "@/components/admin-dashboard/routes";
import Sidebar from "@/components/admin-dashboard/sidebar";
import { SidebarContext } from "@/contexts/sidebar-context";
import { IDashboardLayoutProps } from "@/shared/layout/admin/type";

import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
} from "@/utils/navigation";

const Component = (props: IDashboardLayoutProps) => {
  const { children, ...rest } = props;
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { onOpen } = useDisclosure();

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <NavbarAdmin
                onOpen={onOpen}
                logoText={"DICA"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            p={{ base: "20px", md: "30px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            {children}
          </Box>
          <Box>
            <FooterAdmin />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
};

Component.displayName = "AdminLayout";
export default Component;