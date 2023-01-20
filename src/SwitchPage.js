import React from "react";
import { TbBulb, TbBulbOff } from "react-icons/tb";
import { useLongPress } from "use-long-press";

import { Icon, Box, Button, useColorModeValue } from "@chakra-ui/react";

const SwitchPage = (props) => {
  const hoverColor = useColorModeValue(
    "rgba(255,40,40,0.2)",
    "rgba(225, 225, 225, 0.1)"
  );

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log("Right click");
  };

  return (
    <div className="container">
      <div className="row my-5 justify-content-between">
        <div
          className="col-6  col-lg-3"
          onClick={() => props.updateSwitch("1")}
        >
          <Button
            colorScheme="red"
            bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            w={"100%"}
            // ml={window.innerWidth > 850 ? "50%" : "0%"}
            // minW={window.innerWidth > 850 ? "50%" : "100%"}
            // maxW={window.innerWidth > 850 ? "50%" : "100%"}
            _hover={{ bg: hoverColor }}
          >
            <Box fontSize={"50"}>
              {props.switchVal.btn1 ? (
                <Icon as={TbBulb} />
              ) : (
                <Icon as={TbBulbOff} />
              )}
            </Box>
          </Button>
        </div>

        <div className="col-6 col-lg-3" onClick={() => props.updateSwitch("2")}>
          <Button
            colorScheme="red"
            bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            w={"100%"}
            _hover={{ bg: hoverColor }}
          >
            <Box fontSize={"50"}>
              {props.switchVal.btn2 ? (
                <Icon as={TbBulb} />
              ) : (
                <Icon as={TbBulbOff} />
              )}
            </Box>
          </Button>
        </div>

        <div className="col-6 col-lg-3" onClick={() => props.updateSwitch("3")}>
          <Button
            colorScheme="red"
            bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            w={"100%"}
            // ml={window.innerWidth > 850 ? "50%" : "0%"}
            // minW={window.innerWidth > 850 ? "50%" : "100%"}
            // maxW={window.innerWidth > 850 ? "50%" : "100%"}
            // _hover={{ bg: "red.200" }}
            _hover={{ bg: hoverColor }}
          >
            <Box fontSize={"50"}>
              {props.switchVal.btn3 ? (
                <Icon as={TbBulb} />
              ) : (
                <Icon as={TbBulbOff} />
              )}
            </Box>
          </Button>
        </div>
        <div
          className="col-6 col-lg-3"
          onClick={() => props.updateSwitch("4")}
          onContextMenu={handleRightClick}
        >
          <Button
            colorScheme="red"
            bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            w={"100%"}
            _hover={{ bg: hoverColor }}
          >
            <Box fontSize={"50"}>
              {props.switchVal.btn4 ? (
                <Icon as={TbBulb} />
              ) : (
                <Icon as={TbBulbOff} />
              )}
            </Box>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwitchPage;
