import React from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";

import UserTable from "@/components/admin-dashboard/table/user-table";
import AdminLayout from "@/shared/layout/admin";

const Component = () => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 2 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <UserTable />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

Component.displayName = "Management";
export default Component;
