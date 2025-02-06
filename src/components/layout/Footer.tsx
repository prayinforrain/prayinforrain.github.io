import { Flex, IconButton, Text } from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <Flex direction="column" gap={2} alignItems="center" mt={8} as="footer">
      <Flex as="address" direction="row" gap={2}>
        <IconButton variant="ghost">
          <LuGithub />
        </IconButton>
        <IconButton variant="ghost">
          <LuGithub />
        </IconButton>
        <IconButton variant="ghost">
          <LuGithub />
        </IconButton>
      </Flex>
      <Text textStyle="xs" color="fg.subtle">
        © 2025 PrayinforRain. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
