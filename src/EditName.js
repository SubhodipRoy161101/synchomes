import React from "react";
import { updateDoc } from "firebase/firestore";
import { Button, Input, Icon } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

const EditName = (props) => {
  const onChange = (e) => {
    props.setName({ [e.target.name]: e.target.value });
  };

  const updateName = async () => {
    const obj = { name: props.name.dName };
    await updateDoc(props.docRef, obj);
    props.deviceVals();
    props.setIsShown((current) => !current);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-lg-10">
          <Input
            variant="unstyled"
            placeholder="Device is located in"
            bg="purple.100"
            p="4"
            m="2"
            // h={"inherit"}
            color="purple.600"
            _placeholder={{ opacity: 0.4, color: "purple.600" }}
            onChange={onChange}
            name="dName"
          />
        </div>
        <div className="col-2 col-lg-2">
          <Button
            colorScheme="purple"
            bg="purple.100"
            variant="ghost"
            p={4}
            borderRadius="xl"
            m={2}
            mr={window.innerWidth > 850 ? "50%" : "0%"}
            minW={window.innerWidth > 850 ? "50%" : "100%"}
            maxW={window.innerWidth > 850 ? "50%" : "100%"}
            _hover={{ bg: "purple.200" }}
            h={"inherit"}
            fontSize="25px"
            onClick={updateName}
          >
            <Icon as={MdOutlineDone} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditName;
