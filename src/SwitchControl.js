import React, { useRef, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db, rtdb } from "./firebase";

import "./SwitchControl.css";
import "./SwitchControlFilled.css";

import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import BtnIconChange from "./BtnIconChange";

import { ref, update } from "firebase/database";

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

  const switchOffColor = useColorModeValue("red.600", "red.200");
  const switchOnColor = useColorModeValue("red.800", "yellow.200");

  const [showIconChangeBox, setShowIconChangeBox] = useState(false);
  const [action, setAction] = useState("");
  const timerRef = useRef();
  const isLongPress = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => setIsOpen(true);
  const cancelRef = React.useRef();

  const startPressTimer = () => {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      onOpen();
      setAction("longpress");
    }, 500);
  };

  const updateRTDB = (btn, updateVal, currentIcon) => {
    const updates = {};
    updates[
      "/User/" +
        localStorage.getItem("uid") +
        "/devices/" +
        localStorage.getItem("deviceControl") +
        "/" +
        btn
    ] = { val: updateVal, icon: currentIcon };

    update(ref(rtdb), updates)
      .then(() => {
        console.log("updated data sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSwitch = async (btn) => {
    console.log("handleOnClick");
    if (isLongPress.current) {
      console.log("Is long press - not continuing.");
      return;
    }
    const currentState = props.switchVal[btn].val;
    const currentIcon = props.switchVal[btn].icon;
    const obj = {};
    obj[btn] = { val: currentState ? 0 : 1, icon: currentIcon };

    await updateDoc(docRef, obj);
    setAction("click");
    updateRTDB(btn, currentState ? 0 : 1, currentIcon);
  };

  const updateBtnIco = async (btn, ico) => {
    const currentState = props.switchVal[btn].val;
    // const currentIcon = props.switchVal[btn].icon;
    const obj = {};
    obj[btn] = { val: currentState, icon: ico };
    await updateDoc(docRef, obj);
  };

  const handleMouseDown = () => {
    console.log("handleOnMouseDown");
    startPressTimer();
  };
  const handleMouseUp = () => {
    console.log("handleOnMouseUp");
    clearTimeout(timerRef.current);
  };
  const handleTouchStart = () => {
    console.log("handleOnTouchStart");
    startPressTimer();
  };
  const handleTouchEnd = () => {
    // if (action === "longpress") return;
    console.log("handleOnTouchEnd");
    clearTimeout(timerRef.current);
  };

  var btnOnIcon = "mode_fan";
  var btnOffIcon = "mode_fan";
  if (props.switchVal !== undefined) {
    if (props.switchVal[props.btn].icon === "mode_fan") {
      btnOnIcon = "mode_fan";
      btnOffIcon = "mode_fan_off";
    } else if (props.switchVal[props.btn].icon === "fluorescent") {
      btnOnIcon = "fluorescent";
      btnOffIcon = "fluorescent";
    } else if (props.switchVal[props.btn].icon === "lightbulb") {
      btnOnIcon = "lightbulb";
      btnOffIcon = "lightbulb";
    } else if (props.switchVal[props.btn].icon === "tv") {
      btnOnIcon = "tv";
      btnOffIcon = "tv";
    }
  }

  return (
    <>
      <BtnIconChange
        isOpen={isOpen}
        cancelRef={cancelRef}
        onClose={onClose}
        updateBtnIco={updateBtnIco}
        hoverColor={hoverColor}
        hoverColorMobile={hoverColorMobile}
        btn={props.btn}
      />
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
          <Box
            color={props.values.val ? switchOnColor : switchOffColor}
            className={
              props.values.val
                ? "material-symbols-rounded"
                : "material-symbols-outlined"
            }
            fontSize={50}
          >
            {props.values.val ? btnOnIcon : btnOffIcon}
          </Box>
        </Button>
      </div>
    </>
  );
};

export default SwitchControl;
