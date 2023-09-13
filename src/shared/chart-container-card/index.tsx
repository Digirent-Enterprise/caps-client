import React from "react";

import { Box } from "@chakra-ui/react";
import { isEmpty } from "lodash";

import { ICompProps } from "@/shared/chart-container-card/type";

const ContainerCard = (props: ICompProps) => {
  const { chart, hasData } = props;
  if (!hasData)
    return (
      <Box
        minW="30%"
        padding="3%"
        minH="20rem"
        borderRadius="14"
        backgroundColor="#2d325a"
        textAlign="center"
        position={"relative"}
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-center">
          <img
            alt="loading"
            src={"/static/dashboard/empty_data_icon.png"}
            className="w-36"
          />
          <div className="text-center text-white"> No Data! </div>
          <div className="text-sm text-gray-500">
            {" "}
            Please update your health regularly!
          </div>
        </div>
      </Box>
    );
  return (
    <Box
      minW="30%"
      padding="3%"
      minH="20rem"
      borderRadius="14"
      backgroundColor="#2d325a"
      textAlign="center"
      position={"relative"}
    >
      {chart}
    </Box>
  );
};

export default ContainerCard;
