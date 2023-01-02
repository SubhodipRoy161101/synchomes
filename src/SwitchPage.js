import React from "react";
import { TbBulb, TbBulbOff } from "react-icons/tb";

import { Icon, Box, Button } from "@chakra-ui/react";

const SwitchPage = (props) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div
          className="col-6  col-lg-6"
          onClick={() => props.updateSwitch("1")}
        >
          <Button
            colorScheme="purple"
            bg="purple.200"
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            ml={window.innerWidth > 850 ? "50%" : "0%"}
            minW={window.innerWidth > 850 ? "50%" : "100%"}
            maxW={window.innerWidth > 850 ? "50%" : "100%"}
            _hover={{ bg: "purple.200" }}
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

        <div className="col-6 col-lg-6" onClick={() => props.updateSwitch("2")}>
          <Button
            colorScheme="purple"
            bg="purple.200"
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            mr={window.innerWidth > 850 ? "50%" : "0%"}
            minW={window.innerWidth > 850 ? "50%" : "100%"}
            maxW={window.innerWidth > 850 ? "50%" : "100%"}
            _hover={{ bg: "purple.200" }}
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

        <div className="col-6 col-lg-6" onClick={() => props.updateSwitch("3")}>
          <Button
            colorScheme="purple"
            bg="purple.200"
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            ml={window.innerWidth > 850 ? "50%" : "0%"}
            minW={window.innerWidth > 850 ? "50%" : "100%"}
            maxW={window.innerWidth > 850 ? "50%" : "100%"}
            _hover={{ bg: "purple.200" }}
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
        <div className="col-6 col-lg-6" onClick={() => props.updateSwitch("4")}>
          <Button
            colorScheme="purple"
            bg="purple.200"
            variant="ghost"
            p={10}
            borderRadius="xl"
            h={"30vh"}
            mb={8}
            mr={window.innerWidth > 850 ? "50%" : "0%"}
            minW={window.innerWidth > 850 ? "50%" : "100%"}
            maxW={window.innerWidth > 850 ? "50%" : "100%"}
            _hover={{ bg: "purple.200" }}
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
