import { Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import { HSeparator } from "@/core/separator";

export function Component() {
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <p>DICA</p>
      <HSeparator mb="20px" />
    </Flex>
  );
}

Component.displayName = "SidebarBrand";
export default Component;
