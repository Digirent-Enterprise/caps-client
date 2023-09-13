import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const globalStyles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
    }),
  },
};
