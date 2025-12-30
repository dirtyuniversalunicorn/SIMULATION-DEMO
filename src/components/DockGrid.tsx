import { Grid } from "@chakra-ui/react";
import { useDockContext } from "../provider/DockProvider";

type DockGridProps = {
    children: React.ReactNode;
};

export const DockGrid = ({ children }: DockGridProps) => {
    const { position } = useDockContext();

    if (position === "left" || position === "right") {
        return (
            <Grid gridTemplateRows={{ base: "repeat(2, 1fr)" }}>
                {children}
            </Grid>
        );
    }

    return (
        <Grid gridTemplateColumns={{ base: "repeat(2, 1fr)" }}>{children}</Grid>
    );
};
