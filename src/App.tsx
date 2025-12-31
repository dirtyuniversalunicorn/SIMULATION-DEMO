import { Box } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./components/Header";
import { Docking } from "./components/Dock";
import DockProvider from "./provider/DockProvider";
import "leaflet/dist/leaflet.css";
import { UnitsProvider } from "./provider/UnitSocketProvider";
import "leaflet/dist/leaflet.css";
import { Map } from "./components/Map";

function App() {
    console.log("Whole app being reloaded!");
    return (
        <Box as="section" height="100vh">
            <UnitsProvider>
                <DockProvider>
                    <Header />
                    <Docking />
                    <Map />
                </DockProvider>
            </UnitsProvider>
        </Box>
    );
}

export default App;
