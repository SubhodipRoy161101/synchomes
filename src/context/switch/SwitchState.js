import React, { useEffect, useState } from "react";
import SwitchContext from "./SwitchContext";
import {
  collection,
  getDoc,
  addDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const SwitchState = (props) => {
  const [switchVal, setSwitchVal] = useState([]);
  const [loader, setLoader] = useState(true);
  const deviceVals = async () => {
    const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;
    console.log(uid);

    const docRef = doc(
      db,
      "User",
      uid,
      "devices",
      localStorage.getItem("deviceControl")
    );

    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    onSnapshot(docRef, (doc) => {
      console.log("Current data: ", doc.data());
      setSwitchVal(doc.data());
      // setLoader(false);
    });
  };

  useEffect(() => {
    deviceVals();
  }, []);
  return (
    <SwitchContext.Provider value={{ switchVal, deviceVals }}>
      {props.children}
    </SwitchContext.Provider>
  );
};

export default SwitchState;
