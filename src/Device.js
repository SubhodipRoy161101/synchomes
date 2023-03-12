import React, { useContext } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, rtdb } from "./firebase";
import DeviceList from "./DeviceList";
import DidContext from "./context/DidContext";
import { ref, set } from "firebase/database";

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
    btn1: { val: 0, icon: "" },
    btn2: { val: 0, icon: "" },
    btn3: { val: 0, icon: "" },
    btn4: { val: 0, icon: "" },
  };
  const addRTDB = (devID, err) => {
    set(
      ref(rtdb, "User/" + localStorage.getItem("uid") + "/devices/" + devID),
      {
        name: "Room Name",
        btn1: { val: 0, icon: "" },
        btn2: { val: 0, icon: "" },
        btn3: { val: 0, icon: "" },
        btn4: { val: 0, icon: "" },
      }
    )
      .then(() => {
        console.log("Data added sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addDevice = () => {
    addDoc(docRef, data)
      .then((res) => {
        console.log(res._key.path.segments[3]);
        props.fetch();
        addRTDB(res._key.path.segments[3]);
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
