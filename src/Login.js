import React, { useContext, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import DidContext from "./context/DidContext";
import {
  Box,
  Heading,
  Highlight,
  Button,
  Icon,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";

const Login = () => {
  const context = useContext(DidContext);
  const { documentFetch } = context;
  let navigate = useNavigate();
  const [uid, setUid] = useState(
    `${
      localStorage.getItem("uid")
        ? localStorage.getItem("uid")
        : " Login to get UID"
    }`
  );

  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      // console.log(data);
      console.log(data);
      const uid = data.user.reloadUserInfo.localId;
      localStorage.setItem("uid", uid);
      console.log(uid);
      documentFetch();
      navigate("/");
    });
  };

  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("dids");
    setUid(" Login to get UID");
    navigate("/");
  };
  const color = useColorModeValue("red.100", "red.600");
  return (
    <>
      {localStorage.getItem("uid") ? (
        <>
          <div className="container">
            <div className="row m-5">
              <Button
                bg={color}
                p={10}
                borderRadius="xl"
                m={window.innerWidth > 850 ? "25%" : "0px"}
                minW={window.innerWidth > 850 ? "50%" : "100%"}
                maxW={window.innerWidth > 850 ? "50%" : "100%"}
                _hover={{ bg: "red.100" }}
                variant="ghost"
                fontSize={20}
                onClick={logout}
              >
                Logout
                <Icon as={HiOutlineLogout} m={2} fontSize={30} />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row my-5">
              <div className="col-12 col-lg-12">
                <Box
                  bg="gray.100"
                  p={10}
                  borderRadius="xl"
                  mx={window.innerWidth > 850 ? "25%" : "0%"}
                  minW={window.innerWidth > 850 ? "50%" : "100%"}
                  maxW={window.innerWidth > 850 ? "50%" : "100%"}
                  _hover={{ bg: "red.100" }}
                >
                  <Heading lineHeight="tall" alignContent={"center"}>
                    <Center>
                      <Highlight
                        query="Login"
                        styles={{
                          px: "4",
                          py: "2",
                          rounded: "full",
                          bg: "red.100",
                        }}
                      >
                        Please Login To Continue
                      </Highlight>
                    </Center>
                  </Heading>
                </Box>
              </div>
            </div>

            <Button
              bg={color}
              p={10}
              borderRadius="xl"
              mx={window.innerWidth > 850 ? "25%" : "0%"}
              minW={window.innerWidth > 850 ? "50%" : "100%"}
              maxW={window.innerWidth > 850 ? "50%" : "100%"}
              _hover={{ bg: "red.100" }}
              onClick={googleSignIn}
              variant="ghost"
              fontSize={20}
            >
              <Icon fontSize={30} m={2} as={FcGoogle} />
              Continue With Google
            </Button>
          </div>
        </>
      )}
      {/* <br /> <br /> */}
      {/* {localStorage.getItem("uid") ? (
        
      ) : (
        ""
      )} */}
      {/* <br /> <br /> */}
    </>
  );
};

export default Login;
