import { Box } from "@chakra-ui/react";
import "./App.css";
import { Map } from "./components/Map";
import { Header } from "./components/Header";
import { Docking } from "./components/Dock";
import DockProvider from "./provider/DockProvider";
import "leaflet/dist/leaflet.css";

function App() {
    return (
        <Box as="section" height="100vh">
            <DockProvider>
                <Header />
                <Docking />
            </DockProvider>
            <Map />
        </Box>
    );
}

export default App;
