import { Grid } from "@chakra-ui/react";
import type { DockGridProps } from "../types/DockGridProps";
import { useDockContext } from "../hooks/useDockContext";

export const DockGrid = ({ children }: DockGridProps) => {
  const { position } = useDockContext();

  const isVertical = position === "left" || position === "right";

  return (
    <Grid
      height={isVertical ? "95vh" : "auto"}
      overflow="hidden"
      gridTemplateRows={isVertical ? "repeat(2, 1fr)" : undefined}
      gridTemplateColumns={!isVertical ? "repeat(2, 1fr)" : undefined}
    >
      {children}
    </Grid>
  );
};
