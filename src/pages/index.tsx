import {
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  LinkOverlay,
  Text,
  Link as ChakraLink,
  VisuallyHidden,
} from "@chakra-ui/react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { getPosts } from "@/util/post";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { LuChevronRight } from "react-icons/lu";
import ArticleCard from "@/components/blog/ArticleCard";
import MetaInformation from "@/components/layout/MetaInformation";

export const getStaticProps = () => {
  return {
    props: {
      posts: getPosts(2),
    },
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MetaInformation />
      <DefaultLayout>
        <main>
          <Container centerContent p={8} gap={4}>
            <Avatar src="/icon.png" size="2xl" />
            <Flex direction="column" gap={2} alignItems="center">
              <Heading size="2xl" as="h2">
                이우재 | WooJae Lee
              </Heading>
              <Text color="fg.muted">Frontend Developer</Text>
              <Text color="fg.muted" as="address" textStyle="sm">
                <ChakraLink href="mailto:prayinforrain96@gmail.com">
                  prayinforrain96@gmail.com
                </ChakraLink>
              </Text>
            </Flex>
          </Container>
          <Container as="section">
            <Heading size="lg" mb={4} as="h2" position="relative">
              Recent Blog Posts
              <LinkOverlay asChild>
                <Link href="/blog">
                  <VisuallyHidden>View All</VisuallyHidden>
                  <Icon size="sm" colorScheme="gray" aria-label="View All">
                    <LuChevronRight />
                  </Icon>
                </Link>
              </LinkOverlay>
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              {posts?.map((post, i) => (
                <ArticleCard key={i} post={post} />
              ))}
            </Grid>
          </Container>
        </main>
      </DefaultLayout>
    </>
  );
}
