import { Button, Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import type { MenuProps } from "../types/MenuProps";

export const Menu = ({ category, items }: MenuProps) => {
    return (
        <ChakraMenu.Root>
            <ChakraMenu.Trigger asChild>
                <Button variant="outline" size="sm">
                    {category}
                </Button>
            </ChakraMenu.Trigger>
            <Portal>
                <ChakraMenu.Positioner>
                    <ChakraMenu.Content>
                        {items.map((item) => (
                            <ChakraMenu.Item value="new-txt">
                                {item}
                            </ChakraMenu.Item>
                        ))}
                    </ChakraMenu.Content>
                </ChakraMenu.Positioner>
            </Portal>
        </ChakraMenu.Root>
    );
};
