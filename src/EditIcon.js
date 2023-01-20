import React, { useEffect } from "react";
import {
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdOutlineDining } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

import { updateDoc } from "firebase/firestore";

const EditIcon = (props) => {
  console.log(props);

  const hoverColor = useColorModeValue(
    "rgba(255,40,40,0.2)",
    "rgba(225, 225, 225, 0.1)"
  );

  const handleClick = async (iconName) => {
    const obj = { icon: iconName };
    await updateDoc(props.docRef, obj);
    // props.deviceVals();
    // props.setIsShown((current) => !current);
  };

  var icon = MdOutlineDining;
  if (props.icon === "MdOutlineDining") {
    icon = MdOutlineDining;
  } else if (props.icon === "RiHotelBedLine") {
    icon = RiHotelBedLine;
  } else if (props.icon === "BiChevronDown") {
    icon = BiChevronDown;
  } else if (props.icon === "MdOutlineDining") {
    icon = MdOutlineDining;
  }

  return (
    <>
      <div className="col-3 col-md-1 col-lg-1">
        {/* <Center> */}
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BiChevronDown />}
            bg={useColorModeValue("red.100", "rgba(225, 225, 225, 0.1)")}
            colorScheme={"red"}
            variant="ghost"
            //   w={"40%"}
            // mr={"0%"}
            _hover={{ bg: hoverColor }}
          >
            <Icon fontSize={24} as={icon} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleClick("MdOutlineDining")}>
              <Icon
                fontSize={"24px"}
                verticalAlign="center"
                as={MdOutlineDining}
                m={1}
              />
              Dining Room
            </MenuItem>
            <MenuItem onClick={() => handleClick("RiHotelBedLine")}>
              <Icon
                as={RiHotelBedLine}
                fontSize={"24px"}
                verticalAlign="center"
                m={1}
              />
              Bed Room
            </MenuItem>
          </MenuList>
        </Menu>
        {/* </Center> */}
      </div>
    </>
  );
};

export default EditIcon;
