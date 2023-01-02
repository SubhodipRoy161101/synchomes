import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DidState from "./context/DidState";
import ControlPage from "./ControlPage";
import ControlState from "./context/Control/ControlState";
import SwitchState from "./context/switch/SwitchState";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <DidState>
          <ControlState>
            <SwitchState>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/control" element={<ControlPage />} />
                </Routes>
              </BrowserRouter>
            </SwitchState>
          </ControlState>
        </DidState>
      </ChakraProvider>
    </>
  );
}

export default App;
