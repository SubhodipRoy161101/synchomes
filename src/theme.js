import { extendTheme } from "@chakra-ui/react";
// import { mode, darken, whiten } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
