import { Box } from "@chakra-ui/react";
import Image from "next/image";

import { IImageProps } from "@/shared/avatar/image/type";

const Component = (props: IImageProps) => {
  const { src, alt, ...rest } = props;
  return (
    <Box overflow={"hidden"} position="relative" {...rest}>
      <Image fill src={src} alt={alt} />
    </Box>
  );
};

Component.displayName = "Image";
export default Component;
