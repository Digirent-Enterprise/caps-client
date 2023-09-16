import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import Handbook from "@/components/documentation/documentation-handbook";
import Map from "@/components/documentation/documentation-map";

const Component = () => {
  const { t } = useTranslation("documentation");
  return (
    <div className="flex w-screen items-start justify-center">
      <Tabs className="w-[95%] lg:w-4/5">
        <div className="flex justify-center">
          <TabList>
            {/*<Tab>{t("about")}</Tab>*/}
            <Tab>{t("handbook")}</Tab>
            <Tab>{t("map")}</Tab>
          </TabList>
        </div>

        <TabPanels>
          {/*<TabPanel>*/}
          {/*  <div>Something</div>*/}
          {/*</TabPanel>*/}
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
