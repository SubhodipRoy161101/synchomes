import React, { useContext, useEffect, useState } from "react";
import ControlContext from "./context/Control/ControlContext";
import { useNavigate } from "react-router-dom";
import SwitchContext from "./context/switch/SwitchContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { AiOutlineControl } from "react-icons/ai";
import { MdOutlineDining } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

import {
  Icon,
  Button,
  Box,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

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

  console.log(devName);
  var icon = MdOutlineDining;
  if (devName !== undefined) {
    if (devName.icon === "MdOutlineDining") {
      icon = MdOutlineDining;
    } else if (devName.icon === "RiHotelBedLine") {
      icon = RiHotelBedLine;
    } else if (devName.icon === "BiChevronDown") {
      icon = BiChevronDown;
    } else if (devName.icon === "MdOutlineDining") {
      icon = MdOutlineDining;
    }
  }
  return (
    <>
      <div className="col-6 col-lg-3">
        <Center>
          <Button
            mb={8}
            onClick={handleClick}
            colorScheme={useColorModeValue("red", "red")}
            bg={useColorModeValue("red.100", "red.600")}
            variant="ghost"
            p={5}
            pb={0}
            borderRadius="xl"
            // m={5}
            h={window.innerWidth > 850 ? "50vh" : "25vh"}
          >
            <div className="row">
              <div className="col-12">
                <Icon fontSize={80} as={icon} />
              </div>
              <div className="col-12">
                <Center>
                  <Text as={"b"} fontSize="xl" pt={0} align="center">
                    {/* {props.did} <br /> */}
                    <p>{devName ? devName.name : "Add Device"}</p>
                  </Text>
                </Center>
                {/* </Button> */}
              </div>
            </div>
          </Button>
        </Center>
        {/* </Box> */}
      </div>
    </>
  );
};

export default DeviceList;
