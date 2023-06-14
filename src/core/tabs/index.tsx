import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Handbook from "@/components/handbook";
import Map from "@/components/map";

const Component = () => {
  return (
    <div className="flex w-screen items-center justify-center py-10 lg:py-20">
      <Tabs className="w-[95%] lg:w-4/5">
        <div className="flex justify-center">
          <TabList>
            <Tab>Tutorial</Tab>
            <Tab>Handbook</Tab>
            <Tab>Map</Tab>
          </TabList>
        </div>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
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
