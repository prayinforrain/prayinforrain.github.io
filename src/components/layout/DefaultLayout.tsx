import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:site_name" content="devWoo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        width="full"
        height="full"
        maxW="800px"
        marginX="auto"
      >
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default DefaultLayout;
