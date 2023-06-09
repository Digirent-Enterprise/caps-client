import { Flex, useColorModeValue } from "@chakra-ui/react";

import { HorizonLogo } from "@/core/icons";
import { HSeparator } from "@/core/separator";

export function Component() {
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

Component.displayName = "SidebarBrand";
export default Component;
