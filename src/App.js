import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DidState from "./context/DidState";
import ControlPage from "./ControlPage";
import ControlState from "./context/Control/ControlState";
import SwitchState from "./context/switch/SwitchState";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ToggleTheme from "./ToggleTheme";
import { useState } from "react";
import theme from "./theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <DidState>
          <ControlState>
            <SwitchState>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/control" element={<ControlPage />} />
                </Routes>
                <ToggleTheme />
              </BrowserRouter>
            </SwitchState>
          </ControlState>
        </DidState>
      </ChakraProvider>
    </>
  );
}

export default App;
