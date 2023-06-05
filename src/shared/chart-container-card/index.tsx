import { Box } from "@chakra-ui/react";

import { ICompProps } from "@/shared/chart-container-card/type";

const ContainerCard = (props: ICompProps) => {
  const { chart } = props;
  return (
    <Box
      minW="30%"
      padding="3%"
      margin="1.5%"
      minH="20rem"
      borderRadius="14"
      backgroundColor="#2d325a"
      textAlign="center"
    >
      {chart}
    </Box>
  );
};

export default ContainerCard;
