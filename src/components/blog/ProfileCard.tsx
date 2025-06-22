import {
  Box,
  CardBody,
  CardDescription,
  CardFooter,
  CardRoot,
  CardTitle,
  HStack,
  Icon,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";
import { Avatar } from "../ui/avatar";

const ProfileCard = ({ ...props }) => {
  return (
    <CardRoot as="address" w="min-content" flexDirection="row" {...props}>
      <Box display="flex" alignItems="center" justifyContent="center" ml={6}>
        <Avatar src="/icon.png" size="2xl" />
      </Box>
      <Box>
        <CardBody>
          <CardTitle as="h2">이우재 | WooJae Lee</CardTitle>
          <CardDescription>Frontend Developer</CardDescription>
        </CardBody>
        <CardFooter>
          <HStack>
            <Link href="https://github.com/prayinforrain">
              <VisuallyHidden>GitHub</VisuallyHidden>
              <Icon as={LuGithub} />
            </Link>
            <Link href="mailto:prayinforrain96@gmail.com">
              prayinforrain96@gmail.com
            </Link>
          </HStack>
        </CardFooter>
      </Box>
    </CardRoot>
  );
};

export default ProfileCard;
