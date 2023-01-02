import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import {
  Center,
  Box,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Accordion,
  Stack,
  Button,
} from "@chakra-ui/react";

const DeviceId = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className={window.innerWidth > 850 ? "col-6 col-lg-6" : "col-md-8"}
        >
          <Center
            px={10}
            borderRadius="xl"
            mb={8}
            // ml={window.innerWidth > 850 ? "25%" : "0%"}
            // maxW={window.innerWidth > 850 ? "50%" : "100%"}
          >
            <Accordion
              allowToggle
              maxW={window.innerWidth > 850 ? "60%" : "90%"}
              minW={window.innerWidth > 850 ? "60%" : "90%"}
              ml={window.innerWidth > 850 ? "60%" : "5%"}
              mr={window.innerWidth > 850 ? "0" : "5%"}
              borderRadius={10}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Device ID
                    </Box>
                    <AiOutlineInfoCircle />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>{localStorage.getItem("deviceControl")}</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Center>
        </div>
        <div className="col-6 col-lg-6">
          <center
            p={10}
            bg="purple.200"
            // borderRadius="xl"
            h={"30vh"}
            mb={8}
            // mr={window.innerWidth > 850 ? "50%" : "0%"}
            // maxW={window.innerWidth > 850 ? "50%" : "100%"}
          >
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<BiArrowBack />}
                colorScheme="purple"
                bg="purple.200"
                variant="ghost"
                borderRadius="50px"
                height="50px"
                hidden={window.innerWidth > 850 ? false : true}
                maxW="50%"
                mx={"25%"}
              >
                Back
              </Button>
            </Stack>
          </center>
        </div>
      </div>
    </div>
  );
};

export default DeviceId;
