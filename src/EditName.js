import { React, useState } from "react";
import { updateDoc } from "firebase/firestore";
import { Button, Input, Icon, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

const EditName = (props) => {
  const [name, setName] = useState(props.switchVal.name);

  const onChange = (e) => {
    setName({ [e.target.name]: e.target.value });
  };

  const updateName = async () => {
    const obj = { name: name.dName };
    await updateDoc(props.docRef, obj);
    props.setIsShown((current) => !current);
  };

  const TextColor = useColorModeValue("red.600", "red.100");
  return (
    <>
      <div className="col-10 col-lg-8 p-0">
        <Input
          variant="unstyled"
          placeholder="Device is located in"
          bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
          p="4"
          my="2"
          // h={"inherit"}
          color={useColorModeValue("red.600", "red.100")}
          _placeholder={{ opacity: 0.4, color: TextColor }}
          onChange={onChange}
          name="dName"
          hidden={props.isShown}
        />
      </div>
      <div className="col-2 col-lg-1">
        <Button
          colorScheme="red"
          bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
          variant="ghost"
          p={4}
          borderRadius="xl"
          my={2}
          _hover={{ bg: "red.200" }}
          h={"inherit"}
          fontSize="25px"
          onClick={updateName}
          hidden={props.isShown}
        >
          <Icon as={MdOutlineDone} />
        </Button>
      </div>
    </>
  );
};

export default EditName;
