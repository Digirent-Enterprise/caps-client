import React from "react";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { ICompProps } from "@/shared/chart-container-card/type";

const Component = (props: ICompProps) => {
  const { t } = useTranslation("health_record");
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
          <Image
            alt="loading"
            src={"/static/dashboard/empty_data_icon.png"}
            width={144}
            height={144}
          />
          <div className="text-center text-white">{t("no_data")}</div>
          <div className="text-sm text-gray-500">
            {" "}
            {t("update_health_record")}
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

Component.displayName = "ChartContainerCard";
export default Component;
