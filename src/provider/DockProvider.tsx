import { createContext, useContext, useState } from "react";
import type { DockContextProps } from "../types/DockContextProps";
import type { DockPosition } from "../types/DockPosition";

export const DockContext = createContext<DockContextProps | undefined>(
    undefined
);

export default function DockProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [visibility, setVisibility] = useState(false);
    const [position, setPosition] = useState<DockPosition>("right");

    const handleVisibility = () => {
        setVisibility((prev) => !prev);
    };

    const handlePosition = (newPosition: DockPosition) => {
        if (newPosition === "left") setPosition("left");
        if (newPosition === "right") setPosition("right");
        if (newPosition === "top") setPosition("top");
        if (newPosition === "bottom") setPosition("bottom");
    };

    return (
        <DockContext.Provider
            value={{
                visibility,
                handleVisibility,
                position,
                handlePosition,
            }}
        >
            {children}
        </DockContext.Provider>
    );
}

export function useDockContext() {
    const dockContext = useContext(DockContext);

    if (!dockContext) {
        throw new Error(
            "useDockContext must be used within the DockContext provider"
        );
    }

    return dockContext;
}
