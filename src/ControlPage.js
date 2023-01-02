import React, { useContext, useState } from "react";
import SwitchContext from "./context/switch/SwitchContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import SwitchPage from "./SwitchPage";
import DeviceId from "./DeviceId";
import EditName from "./EditName";
import DeviceName from "./DeviceName";
import { Box } from "@chakra-ui/react";

const ControlPage = () => {
  const context = useContext(SwitchContext);
  const { switchVal, deviceVals } = context;

  const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;
  console.log(uid);

  const docRef = doc(
    db,
    "User",
    uid,
    "devices",
    localStorage.getItem("deviceControl")
  );

  const updateSwitch = async (btn) => {
    console.log(btn);
    const currentState = switchVal["btn" + btn];
    console.log(currentState);
    const obj = {};
    obj["btn" + btn] = currentState ? 0 : 1;
    console.log(obj);

    await updateDoc(docRef, obj);
    // deviceVals();
  };

  const [name, setName] = useState(switchVal.name);
  console.log(name);

  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <DeviceName
        device={switchVal.name}
        setIsShown={setIsShown}
        isShown={isShown}
      />
      <Box hidden={isShown}>
        <EditName
          name={name}
          setName={setName}
          docRef={docRef}
          // deviceVals={deviceVals}
          setIsShown={setIsShown}
        />
      </Box>

      <SwitchPage updateSwitch={updateSwitch} switchVal={switchVal} />
      <DeviceId />
    </>
  );
};

export default ControlPage;
