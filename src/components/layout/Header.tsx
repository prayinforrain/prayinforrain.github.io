import { Flex, Heading, IconButton, VisuallyHidden } from "@chakra-ui/react";
import {
  LuBook,
  LuFileUser,
  LuHouse,
  LuMenu,
  LuUmbrella,
} from "react-icons/lu";
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
import Link from "next/link";

const Header = ({ pageTitle = "devWoo" }: { pageTitle?: string }) => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      w="100%"
      position="sticky"
      top={0}
      as="header"
      zIndex={100}
      backgroundColor="bg"
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "1px",
        backgroundColor: "border.emphasized",
        marginTop: 4,
      }}
    >
      <IconButton variant="ghost" aria-label="Home" zIndex={1} asChild>
        <Link href="/">
          <LuUmbrella />
        </Link>
      </IconButton>
      <Heading
        size="lg"
        as="h1"
        position="absolute"
        left={0}
        right={0}
        textAlign="center"
      >
        {pageTitle}
      </Heading>
      <Flex
        direction="row"
        gap={2}
        display={{ base: "none", md: "flex" }}
        as="nav"
      >
        <VisuallyHidden>Menu</VisuallyHidden>
        <MenuItem href="/" text="Home" />
        <MenuItem href="/blog" text="Blog" />
        <MenuItem href="/about" text="About" />
        <ColorModeButton size="md" />
      </Flex>

      {/* 모바일 메뉴 */}
      <DrawerRoot placement="top" unmountOnExit={false}>
        <DrawerTrigger asChild display={{ base: "flex", md: "none" }}>
          <IconButton variant="ghost" aria-label="메뉴 열기">
            <VisuallyHidden>메뉴 열기</VisuallyHidden>
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
              <MenuItem href="/about" text="About" icon={<LuFileUser />} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </Flex>
  );
};

export default Header;
