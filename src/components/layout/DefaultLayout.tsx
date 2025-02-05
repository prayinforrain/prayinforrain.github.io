import { Flex } from "@chakra-ui/react";
import Header from "./Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex
      direction="column"
      width="full"
      height="full"
      maxW="800px"
      marginX="auto"
    >
      <Header />
      {children}
    </Flex>
  );
};

export default DefaultLayout;
