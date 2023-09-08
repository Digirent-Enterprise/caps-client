import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import Handbook from "@/components/handbook";
import Map from "@/components/map";
import Tutorial from "src/components/tutorial-step";

const Component = () => {
  const { t } = useTranslation("documentation");
  return (
    <div className="flex w-screen items-center justify-center py-10 lg:py-20">
      <Tabs className="w-[95%] lg:w-4/5">
        <div className="flex justify-center">
          <TabList>
            <Tab>{t("tutorial")}</Tab>
            <Tab>{t("handbook")}</Tab>
            <Tab>{t("map")}</Tab>
          </TabList>
        </div>

        <TabPanels>
          <TabPanel>
            <Tutorial />
          </TabPanel>
          <TabPanel>
            <Handbook />
          </TabPanel>
          <TabPanel>
            <Map />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

Component.displayName = "Tabs";
export default Component;
