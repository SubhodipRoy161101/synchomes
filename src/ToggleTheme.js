import { React } from "react";
import {
  Button,
  Center,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Center>
            <Button
              onClick={toggleColorMode}
              fontSize={20}
              colorScheme="orange"
              bg={useColorModeValue("orange.100", "orange.500")}
              variant="ghost"
              p={4}
              mt={4}
              borderRadius="xl"
            >
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
