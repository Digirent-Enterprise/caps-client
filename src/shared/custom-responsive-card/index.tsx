import React from "react";

import { Box } from "@chakra-ui/react";

import { ICustomResponsiveCardProps } from "@/shared/custom-responsive-card/type";

const Component = React.memo((props: ICustomResponsiveCardProps) => {
  const { className, style, children, onClick } = props;
  return (
    <Box
      minW="30%"
      padding="3%"
      minH="20rem"
      borderRadius="14"
      backgroundColor="#2d325a"
      textAlign="center"
      onClick={onClick}
      className={`hover:bg-gray-200" rounded-lg transition duration-300 hover:shadow-2xl ${className}`}
      style={style}
    >
      {children && children}
    </Box>
  );
});

Component.displayName = "CustomResponsiveCard";

export default Component;
