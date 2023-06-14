import { Box, Flex, Stack } from "@chakra-ui/react";

import SidebarBrand from "@/components/admin-dashboard/sidebar/sidebar-brand";
import { ISidebarContentProps } from "@/components/admin-dashboard/sidebar/sidebar-content/type";
import SidebarLinks from "@/components/admin-dashboard/sidebar/sidebar-links";

const Component = (props: ISidebarContentProps) => {
  const { routes } = props;
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <SidebarBrand />
      <Stack direction="column" mt="8px" mb="auto">
        <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
          <SidebarLinks routes={routes} />
        </Box>
      </Stack>

      <Box
        ps="20px"
        pe={{ lg: "16px", "2xl": "20px" }}
        mt="60px"
        mb="40px"
        borderRadius="30px"
      ></Box>
    </Flex>
  );
};

Component.displayName = "SidebarContent";
export default Component;
