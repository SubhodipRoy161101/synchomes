import { Button, Icon, useColorModeValue, Center } from "@chakra-ui/react";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DeviceName = (props) => {
  const handleClick = () => {
    props.setIsShown((current) => !current);
  };
  const hoverColor = useColorModeValue(
    "rgba(255,40,40,0.2)",
    "rgba(225, 225, 225, 0.1)"
  );
  return (
    <div className="col-6 col-lg-6">
      {/* <Center> */}
      <Button
        onClick={handleClick}
        fontSize={20}
        colorScheme="red"
        bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
        variant="ghost"
        // p={4}
        // mt={4}
        borderRadius="xl"
        _hover={{ bg: hoverColor }}
      >
        <p>{props.device} </p>
        <Icon ml={2} as={props.isShown ? BiEditAlt : AiOutlineCloseCircle} />
      </Button>
      {/* </Center> */}
    </div>
  );
};

export default DeviceName;
