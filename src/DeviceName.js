import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DeviceName = (props) => {
  const handleClick = () => {
    props.setIsShown((current) => !current);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-12">
          {/* <Center> */}
          <Button
            onClick={handleClick}
            fontSize={20}
            colorScheme="orange"
            bg="orange.100"
            variant="ghost"
            p={4}
            mt={4}
            borderRadius="xl"
            _hover={{ bg: "orange.200" }}
          >
            <p>{props.device} </p>
            <Icon
              ml={2}
              as={props.isShown ? BiEditAlt : AiOutlineCloseCircle}
            />
          </Button>
          {/* </Center> */}
        </div>
      </div>
    </div>
  );
};

export default DeviceName;
