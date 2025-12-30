import { Box } from "@chakra-ui/react";
import "./App.css";
import { Map } from "./components/Map";
import { Header } from "./components/Header";
import { Dock } from "react-dock";

function App() {
    return (
        <Box as="section" height="100vh">
            <Header />
            <Map />
            <Dock
                position="right"
                isVisible
                dockStyle={{ backgroundColor: "black" }}
            >
                Content of the dock
            </Dock>
        </Box>
    );
}

export default App;
