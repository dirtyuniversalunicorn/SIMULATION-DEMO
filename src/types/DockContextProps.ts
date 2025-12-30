import type { DockPosition } from "./DockPosition";

export type DockContextProps = {
    handleVisibility: () => void;
    visibility: boolean;
    position: DockPosition;
    handlePosition: (position: DockPosition) => void;
}