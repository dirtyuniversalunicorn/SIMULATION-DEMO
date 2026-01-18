import { useContext } from "react";
import { DockContext } from "../provider/DockProvider";

export function useDockContext() {
  const dockContext = useContext(DockContext);

  if (!dockContext) {
    throw new Error(
      "useDockContext must be used within the DockContext provider",
    );
  }

  return dockContext;
}
