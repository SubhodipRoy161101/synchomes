import React, { useContext } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import DeviceList from "./DeviceList";
import DidContext from "./context/DidContext";

const Device = (props) => {
  const context = useContext(DidContext);
  const { didStore } = context;
  const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;
  console.log(uid);

  const docRef = collection(
    db,
    "User",
    localStorage.getItem("uid") ? localStorage.getItem("uid") : "guest",
    "devices"
  );

  const data = {
    name: "Room Name",
    btn1: 0,
    btn2: 0,
    btn3: 0,
    btn4: 0,
  };
  const addDevice = () => {
    addDoc(docRef, data)
      .then((data) => {
        console.log(data._key.path.segments[3]);
        props.fetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <button onClick={addDevice}>Add Device</button>
        {console.log(localStorage.getItem("dids"))}
        <button onClick={props.fetch}>Refresh</button>
        {didStore.map((did) => {
          return <DeviceList did={did} key={did} />;
        })}
      </div>
    </div>
  );
};

export default Device;
