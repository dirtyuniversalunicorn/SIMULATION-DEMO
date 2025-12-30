import { Box } from "@chakra-ui/react";
import "./App.css";
import { Map } from "./components/Map";
import { Header } from "./components/Header";

function App() {
    return (
        <Box as="section" height="100vh">
            <Header />
            <Map />
        </Box>
    );
}

export default App;
