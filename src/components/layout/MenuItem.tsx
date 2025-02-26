import { Button, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface MenuItemProps {
  href: string;
  text: string;
  icon?: ReactNode;
}

const MenuItem = ({ href, text, icon }: MenuItemProps) => {
  const { pathname } = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <Link passHref href={href} legacyBehavior>
      <Button
        variant={isActive(href) ? "subtle" : "ghost"}
        as="a"
        justifyContent={isMobile ? "flex-start" : "center"}
      >
        {icon}
        {text}
      </Button>
    </Link>
  );
};

export default MenuItem;
