import DefaultLayout from "@/components/layout/DefaultLayout";
import MetaInformation from "@/components/layout/MetaInformation";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { getAllPosts } from "@/util/post";
import { Container, Heading, HStack, Stack } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const POST_PER_PAGE = 5;

export const getStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts.slice(0, POST_PER_PAGE),
      page: 1,
      totalPage: Math.ceil(posts.length / POST_PER_PAGE),
    },
  };
};

export default function PostsPage({
  posts,
  page,
  totalPage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
      <MetaInformation title="Blog" />
      <main>
        <Container>
          <Heading size="lg" as="h2">
            Blog Posts
          </Heading>
          <Stack gap={4}>
            {posts.map((post) => (
              <Link href={`${post.slug}`} key={post.slug}>
                {post.title}
              </Link>
            ))}
          </Stack>
          <PaginationRoot
            w="full"
            count={totalPage}
            page={page}
            pageSize={POST_PER_PAGE}
            getHref={(p) => `/blog/${p}`}
          >
            <HStack gap={1} w="full" justifyContent="center">
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        </Container>
      </main>
    </DefaultLayout>
  );
}
