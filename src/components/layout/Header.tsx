import { Flex, IconButton } from "@chakra-ui/react";
import { LuBook, LuHouse, LuMenu, LuUmbrella } from "react-icons/lu";
import { ColorModeButton } from "../ui/color-mode";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      w="full"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "border.emphasized",
        marginTop: 4,
      }}
    >
      <IconButton variant="ghost">
        <LuUmbrella />
      </IconButton>
      <Flex
        direction="row"
        gap={2}
        display={{ base: "none", md: "flex" }}
        as="nav"
      >
        <MenuItem href="/" text="Home" />
        <MenuItem href="/blog" text="Blog" />
        <ColorModeButton size="md" />
      </Flex>
      <DrawerRoot placement="top">
        <DrawerTrigger asChild display={{ base: "flex", md: "none" }}>
          <IconButton variant="ghost">
            <LuMenu />
          </IconButton>
        </DrawerTrigger>
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              Menu
              <ColorModeButton />
            </DrawerTitle>
          </DrawerHeader>
          <DrawerBody paddingInline={4} paddingBlock={4}>
            <Flex direction="column" gap={2}>
              <MenuItem href="/" text="Home" icon={<LuHouse />} />
              <MenuItem href="/blog" text="Blog" icon={<LuBook />} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </Flex>
  );
};

export default Header;
