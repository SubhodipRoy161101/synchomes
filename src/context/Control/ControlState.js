import React, { useState } from "react";
import ControlContext from "./ControlContext";

const ControlState = (props) => {
  const [deviceId, setDeviceId] = useState("");
  const updateId = (did) => {
    localStorage.removeItem("deviceControl");
    console.log("Setting device Id to : ", did.did);
    // setDeviceId(did.did);
    // console.log(deviceId);
    localStorage.setItem("deviceControl", did.did);
    console.log(localStorage.getItem("deviceControl"));
  };
  return (
    <ControlContext.Provider value={{ updateId, deviceId }}>
      {props.children}
    </ControlContext.Provider>
  );
};

export default ControlState;
