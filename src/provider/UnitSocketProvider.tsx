import {
    createContext,
    useContext,
    useEffect,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";
import type { Unit } from "../types/Unit";
import { socket } from "../socket";

type UnitsContextValue = {
    units: Unit[];
    isConnected: boolean;
    selectedUnit: string;
    setSelectedUnit: Dispatch<SetStateAction<string>>;
};

const UnitsContext = createContext<UnitsContextValue | null>(null);

export function UnitsProvider({ children }: { children: ReactNode }) {
    const [units, setUnits] = useState<Unit[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState("");

    useEffect(() => {
        socket.on("connect", () => setIsConnected(true));
        socket.on("disconnect", () => setIsConnected(false));

        socket.on("units:init", (data: Unit[]) => {
            setUnits(data);
        });

        socket.on("units:update", (data: Unit[]) => {
            setUnits(data);
        });

        socket.on(
            "unit:move",
            ({ id, position }: { id: string; position: [number, number] }) => {
                setUnits((prev) =>
                    prev.map((u) => (u.id === id ? { ...u, position } : u))
                );
            }
        );

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("units:init");
            socket.off("units:update");
            socket.off("unit:move");
        };
    }, []);

    return (
        <UnitsContext.Provider
            value={{ units, isConnected, setSelectedUnit, selectedUnit }}
        >
            {children}
        </UnitsContext.Provider>
    );
}

export function useUnitSocketContext() {
    const unitsContext = useContext(UnitsContext);

    if (!unitsContext) {
        throw new Error(
            "useUnitSocketContext must be used within the UnitsContext provider"
        );
    }

    return unitsContext;
}
