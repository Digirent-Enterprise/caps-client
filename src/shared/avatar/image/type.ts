import { ChakraComponent } from "@chakra-ui/react";

export interface IImageProps extends ChakraComponent<"div"> {
  src: string;
  alt: string;
}
