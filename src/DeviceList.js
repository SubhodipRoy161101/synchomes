import React, { useContext, useEffect, useState } from "react";
import ControlContext from "./context/Control/ControlContext";
import { useNavigate } from "react-router-dom";
import SwitchContext from "./context/switch/SwitchContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { AiOutlineControl } from "react-icons/ai";
import { Icon, Button, Box, Text, Center } from "@chakra-ui/react";

const DeviceList = (props) => {
  const context = useContext(ControlContext);
  const { updateId } = context;

  const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;

  const swContext = useContext(SwitchContext);
  const { deviceVals } = swContext;

  let navigate = useNavigate();

  const { did } = props;
  const handleClick = () => {
    updateId({ did });
    navigate("/control");
    deviceVals();
  };

  const docRef = doc(db, "User", uid, "devices", props.did);
  // console.log(props.did);
  const [devName, setDevName] = useState([]);
  const getDname = async () => {
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    setDevName(docSnap.data());
  };

  useEffect(() => {
    getDname();
  }, []);

  return (
    <>
      <div className="col-6 col-lg-3">
        {/* {props.did} <br /> {devName.name} */}
        <Box
          bg="purple.200"
          borderRadius="xl"
          mb={8}
          mx={3}
          onClick={handleClick}
          _hover={{ bg: "purple.200", cursor: "pointer" }}
        >
          <Center>
            <Box
              color="purple"
              bg="purple.200"
              variant="ghost"
              p={5}
              pb={0}
              borderRadius="xl"
              m={5}
              // h={"25vh"}
              // mx={window.innerWidth > 850 ? "25%" : "0%"}
              // minW={window.innerWidth > 850 ? "100%" : "100%"}
              // maxW={window.innerWidth > 850 ? "100%" : "100%"}
              _hover={{ bg: "purple.200" }}
            >
              <Icon fontSize={50} as={AiOutlineControl} />
            </Box>
          </Center>
          <div className="row">
            <div className="col-12">
              {/* <Button
                color="purple"
                bg="purple.200"
                variant="ghost"
                p={2}
                minW={"100%"}
                maxW={"100%"}
                borderRadius="xl"
              > */}
              <Center>
                <Text
                  as={"b"}
                  fontSize="xl"
                  color="purple"
                  minW={"100%"}
                  maxW={"100%"}
                  p={2}
                  pt={0}
                  align="center"
                >
                  {/* {props.did} <br /> */}
                  {devName.name}
                </Text>
              </Center>
              {/* </Button> */}
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default DeviceList;
