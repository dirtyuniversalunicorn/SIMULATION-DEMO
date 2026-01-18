import { Box } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./components/Header";
import { Docking } from "./components/Dock";
import DockProvider from "./provider/DockProvider";
import "leaflet/dist/leaflet.css";
import { SocketProvider } from "./provider/SocketProvider";
import "leaflet/dist/leaflet.css";
import { Map } from "./components/Map";
import { useSocketStatus } from "./hooks/useSocketStatus";
import { Loading } from "./components/Loading";

function App() {
  const status = useSocketStatus();
  return (
    <Box as="section" height="100vh">
      <SocketProvider>
        <DockProvider>
          <Header />
          <Docking />
          <Box>
            <Map />
            {status !== "connected" && <Loading />}
          </Box>
        </DockProvider>
      </SocketProvider>
    </Box>
  );
}

export default App;
