import React, { useRef, useState } from "react";
import { TbBulb, TbBulbOff } from "react-icons/tb";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

import { Icon, Box, Button, useColorModeValue } from "@chakra-ui/react";
import { redirect } from "react-router-dom";

const SwitchControl = (props) => {
  const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;
  const docRef = doc(
    db,
    "User",
    uid,
    "devices",
    localStorage.getItem("deviceControl")
  );

  const hoverColor = useColorModeValue(
    "rgba(252,129,129,0.9)",
    "rgba(225, 225, 225, 0.2)"
  );
  const hoverColorMobile = useColorModeValue(
    "red.300",
    "rgba(225,225,225,0.1)"
  );

  const switchOffColor = useColorModeValue("red.600", "red.100");
  const switchOnColor = useColorModeValue("yellow.200", "yellow.400");

  const [showIconChangeBox, setShowIconChangeBox] = useState(true);
  const [action, setAction] = useState("");
  const timerRef = useRef();

  const updateSwitch = async (btn) => {
    if (action === "longpress") {
      return;
    }
    console.log(props.switchVal);
    console.log(btn);
    const currentState = props.switchVal[btn].val;
    console.log(currentState);
    const obj = {};
    obj[btn] = { val: currentState ? 0 : 1, icon: "icon" };
    console.log(obj);

    await updateDoc(docRef, obj);
    // deviceVals();
  };

  const handleMouseDown = () => {
    console.log("handleMouseDown");
    startPressTimer();
  };
  const handleMouseUp = () => {
    console.log("handleMouseUp");
    clearTimeout(timerRef.current);
  };
  const handleTouchStart = () => {
    console.log("handleTouchStart");
    startPressTimer();
  };
  const handleTouchEnd = () => {
    console.log("handleTouchEnd");
    clearTimeout(timerRef.current);
  };

  const startPressTimer = () => {
    setAction("");
    setTimeout(() => {
      console.log("stratPressTimer");
      setAction("longpress");
      setShowIconChangeBox(false);
    }, 500);
  };

  //   console.log(props.values);

  return (
    <>
      <div
        className="col-6  col-lg-3"
        onClick={() => updateSwitch(props.btn)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Button
          colorScheme="red"
          bg={useColorModeValue("red.300", "rgba(225, 225, 225, 0.1)")}
          variant="ghost"
          p={10}
          borderRadius="xl"
          h={"30vh"}
          mb={8}
          w={"100%"}
          _hover={{
            bg: window.innerWidth > 800 ? hoverColor : hoverColorMobile,
          }}
        >
          <Box fontSize={"50"}>
            <Icon
              color={props.values.val ? switchOnColor : switchOffColor}
              as={TbBulb}
            />
          </Box>
        </Button>
      </div>
    </>
  );
};

export default SwitchControl;
