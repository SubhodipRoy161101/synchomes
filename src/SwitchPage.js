import React from "react";

import SwitchControl from "./SwitchControl";

const SwitchPage = (props) => {
  // console.log(type(props.switchVal));
  const btns = Object.keys(props.switchVal);
  btns.sort();

  return (
    <div className="container">
      <div className="row my-5 justify-content-between">
        {btns.map((btn) => {
          console.log(btn);
          if (btn === "name" || btn === "icon") {
            console.log("");
            return;
          } else {
            return (
              <SwitchControl
                btn={btn}
                values={props.switchVal[btn]}
                switchVal={props.switchVal}
                key={btn}
              />
            );
          }
        })}
      </div>
    </div>
  );
  // <div className="container">
  //   <div className="row my-5 justify-content-between">
  //     <div
  //       className="col-6  col-lg-3"
  //       onClick={() => updateSwitch("1")}
  //       onMouseDown={handleMouseDown}
  //       onMouseUp={handleMouseUp}
  //       onTouchStart={handleTouchStart}
  //       onTouchEnd={handleTouchEnd}
  //     >
  //       <Button
  //         colorScheme="red"
  //         bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
  //         variant="ghost"
  //         p={10}
  //         borderRadius="xl"
  //         h={"30vh"}
  //         mb={8}
  //         w={"100%"}
  //         // ml={window.innerWidth > 850 ? "50%" : "0%"}
  //         // minW={window.innerWidth > 850 ? "50%" : "100%"}
  //         // maxW={window.innerWidth > 850 ? "50%" : "100%"}
  //         _hover={{ bg: hoverColor }}
  //       >
  //         <Box fontSize={"50"}>
  //           {props.switchVal.btn1 ? (
  //             <Icon as={TbBulb} />
  //           ) : (
  //             <Icon as={TbBulbOff} />
  //           )}
  //         </Box>
  //       </Button>
  //     </div>

  //     <div
  //       className="col-6 col-lg-3"
  //       onClick={() => updateSwitch("2")}
  //       onMouseDown={handleMouseDown}
  //       onMouseUp={handleMouseUp}
  //       onTouchStart={handleTouchStart}
  //       onTouchEnd={handleTouchEnd}
  //     >
  //       <Button
  //         colorScheme="red"
  //         bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
  //         variant="ghost"
  //         p={10}
  //         borderRadius="xl"
  //         h={"30vh"}
  //         mb={8}
  //         w={"100%"}
  //         _hover={{ bg: hoverColor }}
  //       >
  //         <Box fontSize={"50"}>
  //           {props.switchVal.btn2 ? (
  //             <Icon as={TbBulb} />
  //           ) : (
  //             <Icon as={TbBulbOff} />
  //           )}
  //         </Box>
  //       </Button>
  //     </div>

  //     <div
  //       className="col-6 col-lg-3"
  //       onClick={() => updateSwitch("3")}
  //       onMouseDown={handleMouseDown}
  //       onMouseUp={handleMouseUp}
  //       onTouchStart={handleTouchStart}
  //       onTouchEnd={handleTouchEnd}
  //     >
  //       <Button
  //         colorScheme="red"
  //         bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
  //         variant="ghost"
  //         p={10}
  //         borderRadius="xl"
  //         h={"30vh"}
  //         mb={8}
  //         w={"100%"}
  //         // ml={window.innerWidth > 850 ? "50%" : "0%"}
  //         // minW={window.innerWidth > 850 ? "50%" : "100%"}
  //         // maxW={window.innerWidth > 850 ? "50%" : "100%"}
  //         // _hover={{ bg: "red.200" }}
  //         _hover={{ bg: hoverColor }}
  //       >
  //         <Box fontSize={"50"}>
  //           {props.switchVal.btn3 ? (
  //             <Icon as={TbBulb} />
  //           ) : (
  //             <Icon as={TbBulbOff} />
  //           )}
  //         </Box>
  //       </Button>
  //     </div>
  //     <div
  //       className="col-6 col-lg-3"
  //       onClick={() => updateSwitch("4")}
  //       onMouseDown={handleMouseDown}
  //       onMouseUp={handleMouseUp}
  //       onTouchStart={handleTouchStart}
  //       onTouchEnd={handleTouchEnd}
  //     >
  //       <Button
  //         colorScheme="red"
  //         bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
  //         variant="ghost"
  //         p={10}
  //         borderRadius="xl"
  //         h={"30vh"}
  //         mb={8}
  //         w={"100%"}
  //         _hover={{ bg: hoverColor }}
  //       >
  //         <Box fontSize={"50"}>
  //           {props.switchVal.btn4 ? (
  //             <Icon as={TbBulb} />
  //           ) : (
  //             <Icon as={TbBulbOff} />
  //           )}
  //         </Box>
  //       </Button>
  //       <Box hidden={showIconChangeBox}>Icon Change box visible</Box>
  //     </div>
  //   </div>
  // </div>
};

export default SwitchPage;
