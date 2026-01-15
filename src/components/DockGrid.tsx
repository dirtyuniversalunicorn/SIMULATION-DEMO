import { Grid } from "@chakra-ui/react";
import { useDockContext } from "../provider/DockProvider";

type DockGridProps = {
  children: React.ReactNode;
};

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
