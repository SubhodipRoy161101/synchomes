import React from "react";
import { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import DidContext from "./DidContext";

const DidState = (props) => {
  var [dids, setDids] = useState([]);
  var uniqueDid = new Set(dids);
  const documentFetch = async () => {
    dids = [];
    uniqueDid = new Set(dids);
    const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;
    console.log(uid);

    const docRef = collection(db, "User", uid, "devices");
    const docSnap = await getDocs(docRef);
    docSnap.forEach((doc) => {
      const device = doc._key.path.segments[8];
      dids.push(device);
      console.log(dids);
      setDids((arr) => [...dids, device]);
    });
    uniqueDid = new Set(dids);
    const didsArray = Array.from(uniqueDid);
    console.log(didsArray);
    localStorage.setItem("dids", didsArray);
  };

  localStorage.getItem("dids");
  var didStore = [];
  if (localStorage.getItem("dids")) {
    didStore = localStorage.getItem("dids").split(",");
    console.log(didStore);
  }

  return (
    <DidContext.Provider value={{ didStore, documentFetch }}>
      {props.children}
    </DidContext.Provider>
  );
};

export default DidState;
