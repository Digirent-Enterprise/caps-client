import { ComponentProps } from "react";

import Image from "@/shared/avatar/image";

export interface IAvatarImageProps extends ComponentProps<typeof Image> {
  showBorder?: boolean;
  style?: React.CSSProperties;
}
