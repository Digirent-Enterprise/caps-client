import { Box, Grid } from "@chakra-ui/react";

import GeneralInformation from "@/shared/general-information";
import AdminLayout from "@/shared/layout/admin";
import Upload from "@/shared/upload";

export default function ProfileOverview() {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1.34fr 1fr 1.62fr",
          }}
          templateRows={{
            base: "repeat(3, 1fr)",
            lg: "1fr",
          }}
          gap={{ base: "20px", xl: "20px" }}
        >
          <Upload
            gridArea={{
              base: "3 / 1 / 4 / 2",
              lg: "1 / 3 / 2 / 4",
            }}
            minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
            pe="20px"
            pb={{ base: "100px", lg: "20px" }}
          />
        </Grid>
        <Grid
          mb="20px"
          templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            "2xl": "1.34fr 1.62fr 1fr",
          }}
          templateRows={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            "2xl": "1fr",
          }}
          gap={{ base: "20px", xl: "20px" }}
        >
          <GeneralInformation
            gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            minH="365px"
            pe="20px"
          />
        </Grid>
      </Box>
    </AdminLayout>
  );
}
