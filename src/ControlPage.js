import React, { useContext, useState } from "react";
import SwitchContext from "./context/switch/SwitchContext";
import { updateDoc, doc } from "firebase/firestore";
import { db, rtdb } from "./firebase";
import SwitchPage from "./SwitchPage";
import DeviceId from "./DeviceId";
import EditName from "./EditName";
import DeviceName from "./DeviceName";
import { Box } from "@chakra-ui/react";
import EditIcon from "./EditIcon";

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
    // console.log(btn);
    // const currentState = switchVal["btn" + btn];
    // console.log(currentState);
    // const obj = {};
    // obj["btn" + btn] = currentState ? 0 : 1;
    // console.log(obj);
    // await updateDoc(docRef, obj);
    // console.log("Updated Switch");
    // updateRTDB(obj);
  };

  const [isShown, setIsShown] = useState(true);

  console.log(switchVal);

  return (
    <>
      <div className="container">
        <div className="row mt-3 justify-content-around">
          <DeviceName
            device={switchVal.name}
            setIsShown={setIsShown}
            isShown={isShown}
          />
          <EditIcon icon={switchVal.icon} docRef={docRef} />
        </div>
        <div className="row justify-content-center mx-3">
          <EditName
            docRef={docRef}
            switchVal={switchVal}
            setIsShown={setIsShown}
            isShown={isShown}
          />
        </div>
      </div>
      <SwitchPage updateSwitch={updateSwitch} switchVal={switchVal} />
      <DeviceId />
    </>
  );
};

export default ControlPage;
