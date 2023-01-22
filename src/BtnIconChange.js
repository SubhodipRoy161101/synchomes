import React from "react";

import {
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Center,
  Button,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
const BtnIconChange = (props) => {
  return (
    <>
      <AlertDialog
        isOpen={props.isOpen}
        leastDestructiveRef={props.cancelRef}
        onClose={props.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent mt="50vh" mx={2} borderRadius={"lg"}>
            <AlertDialogBody>
              <Center>
                <Stack direction={"row"} spacing="24px">
                  <Button
                    minW="40px"
                    h="40px"
                    colorScheme="red"
                    bg={useColorModeValue(
                      "red.300",
                      "rgba(225, 225, 225, 0.1)"
                    )}
                    variant="ghost"
                    borderRadius="xl"
                    _hover={{
                      bg:
                        window.innerWidth > 800
                          ? props.hoverColor
                          : props.hoverColorMobile,
                    }}
                    onClick={() => props.updateBtnIco(props.btn, "mode_fan")}
                  >
                    <Box className="material-symbols-rounded" fontSize={25}>
                      mode_fan
                    </Box>
                  </Button>
                  <Button
                    minW="40px"
                    h="40px"
                    colorScheme="red"
                    bg={useColorModeValue(
                      "red.300",
                      "rgba(225, 225, 225, 0.1)"
                    )}
                    variant="ghost"
                    borderRadius="xl"
                    _hover={{
                      bg:
                        window.innerWidth > 800
                          ? props.hoverColor
                          : props.hoverColorMobile,
                    }}
                    onClick={() => props.updateBtnIco(props.btn, "fluorescent")}
                  >
                    <Box className="material-symbols-rounded" fontSize={25}>
                      fluorescent
                    </Box>
                  </Button>
                  <Button
                    minW="40px"
                    h="40px"
                    colorScheme="red"
                    bg={useColorModeValue(
                      "red.300",
                      "rgba(225, 225, 225, 0.1)"
                    )}
                    variant="ghost"
                    borderRadius="xl"
                    _hover={{
                      bg:
                        window.innerWidth > 800
                          ? props.hoverColor
                          : props.hoverColorMobile,
                    }}
                    onClick={() => props.updateBtnIco(props.btn, "lightbulb")}
                  >
                    <Box className="material-symbols-rounded" fontSize={25}>
                      lightbulb
                    </Box>
                  </Button>
                  <Button
                    minW="40px"
                    h="40px"
                    colorScheme="red"
                    bg={useColorModeValue(
                      "red.300",
                      "rgba(225, 225, 225, 0.1)"
                    )}
                    variant="ghost"
                    borderRadius="xl"
                    _hover={{
                      bg:
                        window.innerWidth > 800
                          ? props.hoverColor
                          : props.hoverColorMobile,
                    }}
                    onClick={() => props.updateBtnIco(props.btn, "tv")}
                  >
                    <Box className="material-symbols-outlined" fontSize={25}>
                      tv
                    </Box>
                  </Button>
                </Stack>
              </Center>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default BtnIconChange;
