import { chakra, useColorMode } from "@chakra-ui/system";

import Image from "@/shared/avatar/image";
import { IAvatarImageProps } from "@/shared/avatar/type";

const Component = ({
  src,
  showBorder,
  alt,
  style,
  ...props
}: IAvatarImageProps) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      {...props}
      {...(showBorder
        ? {
            border: "2px",
            borderColor: colorMode === "dark" ? "navy.700" : "white",
          }
        : {})}
      alt={alt}
      src={src}
      style={{ ...style, borderRadius: "50%" }}
    />
  );
};

export const ChakraNextAvatar = chakra(Component, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

Component.displayName = "Avatar";
export default Component;
