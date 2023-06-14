import React from "react";

import { Box, Grid } from "@chakra-ui/react";

import Banner from "@/shared/banner";
import GeneralInformation from "@/shared/general-information";
import AdminLayout from "@/shared/layout/admin";
import Upload from "@/shared/upload";

const Component = () => {
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
          <Banner
            gridArea="1 / 1 / 2 / 2"
            banner="/theme/dark.png"
            avatar="/theme/dark.png"
            name="Adela Parkson"
            job="Product Designer"
            posts="17"
            followers="9.7k"
            following="274"
          />
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

        <GeneralInformation minH="365px" pe="20px" />
      </Box>
    </AdminLayout>
  );
};

Component.displayName = "Profile";
export default Component;
