import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { db } from "./firebase";
import Device from "./Device";
import DidContext from "./context/DidContext";

const Home = () => {
  const context = useContext(DidContext);
  const { documentFetch } = context;
  const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : 0;
  console.log(uid);

  let navigate = useNavigate();
  const redirect = () => {
    console.log("Redirecting.....");
    navigate("/login");
  };

  useEffect(() => {
    if (!uid) {
      navigate("/login");
    }
  });

  return (
    <div>
      {uid ? (
        <Device fetch={documentFetch} />
      ) : (
        <>
          {/* {navigate("/login")} */}
          {/* <div>
            <h2>Please Login</h2>
            <button onClick={redirect}>Login</button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Home;
