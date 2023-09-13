import { extendTheme } from "@chakra-ui/react";

import { buttonStyles } from "@/utils/theme/button";
import { CardComponent } from "@/utils/theme/card";
import { inputStyles } from "@/utils/theme/input";
import { linkStyles } from "@/utils/theme/link";
import { globalStyles } from "@/utils/theme/styles";

export default extendTheme(
  globalStyles,
  buttonStyles,
  inputStyles,
  linkStyles,
  CardComponent,
);
