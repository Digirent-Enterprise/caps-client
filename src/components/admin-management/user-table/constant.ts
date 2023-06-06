import { styled } from "@nextui-org/react";

export const StyledBadge = styled("span", {
  display: "inline-block",
  textTransform: "uppercase",
  padding: "$2 $3",
  margin: "0 2px",
  fontSize: "10px",
  fontWeight: "$bold",
  borderRadius: "14px",
  letterSpacing: "0.6px",
  lineHeight: 1,
  boxShadow: "1px 2px 5px 0px rgb(0 0 0 / 5%)",
  alignItems: "center",
  alignSelf: "center",
  color: "$white",
  variants: {
    role: {
      user: {
        bg: "$successLight",
        color: "$successLightContrast",
      },
      admin: {
        bg: "$errorLight",
        color: "$errorLightContrast",
      },
    },
    status: {
      active: {
        bg: "$successLight",
        color: "$successLightContrast",
      },
      deactivated: {
        bg: "$errorLight",
        color: "$errorLightContrast",
      },
    },
  },
  defaultVariants: {
    status: "active",
    role: "user",
  },
});

export const IconButton = styled("button", {
  dflex: "center",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: "0",
  margin: "0",
  bg: "transparent",
  transition: "$default",
  "&:hover": {
    opacity: "0.8",
  },
  "&:active": {
    opacity: "0.6",
  },
});

export const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];
