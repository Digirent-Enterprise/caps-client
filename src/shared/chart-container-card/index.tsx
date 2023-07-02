import { Box } from "@chakra-ui/react";

import { ICompProps } from "@/shared/chart-container-card/type";

const ContainerCard = (props: ICompProps) => {
  const { chart } = props;
  return (
    <Box
      minW="30%"
      padding="3%"
      minH="20rem"
      borderRadius="14"
      backgroundColor="#14a27d"
      textAlign="center"
    >
      {chart}
    </Box>
  );
};

export default ContainerCard;
