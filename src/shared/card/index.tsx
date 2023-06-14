import { useStyleConfig, chakra, forwardRef } from "@chakra-ui/react";

import { ICardProps } from "@/shared/card/type";

const Component = forwardRef<ICardProps, "div">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Card", { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

Component.displayName = "Card";
export default Component;
