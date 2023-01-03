import { extendTheme } from "@chakra-ui/react";
// import { mode, darken, whiten } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          // bg: `${
          //   localStorage.getItem("chakra-ui-color-mode") === "light"
          //     ? "red.100"
          //     : "red.600"
          // }`,
          bg: "red.100",
        }),
      },
    },
  },
};

const theme = extendTheme({ config });

export default theme;
