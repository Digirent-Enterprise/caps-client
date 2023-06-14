import {
  Flex,
  Box,
  Text,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconPencil } from "@tabler/icons-react";

import Card from "@/shared/card";
import { IInformationProps } from "@/shared/general-information/information/type";

const Component = (props: IInformationProps) => {
  const { title, value, link, ...rest } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest}>
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Box>
          <Text fontWeight="500" color={textColorSecondary} fontSize="sm">
            {title}
          </Text>
          <Text color={textColorPrimary} fontWeight="500" fontSize="md">
            {value}
          </Text>
        </Box>

        <Link
          href={link}
          variant="no-hover"
          me="16px"
          ms="auto"
          p="0px !important"
        >
          <Icon as={IconPencil} color="secondaryGray.500" h="18px" w="18px" />
        </Link>
      </Flex>
    </Card>
  );
};

Component.displayName = "Information";
export default Component;
