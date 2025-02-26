import { Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <Flex direction="column" gap={2} alignItems="center" mt={8} as="footer">
      <Flex as="address" direction="row" gap={2}>
        <Link
          href="https://github.com/prayinforrain"
          legacyBehavior
          target="_blank"
        >
          <IconButton variant="ghost" as="a">
            <LuGithub />
          </IconButton>
        </Link>
      </Flex>
      <Text textStyle="xs" color="fg.subtle">
        © 2025 PrayinforRain. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
