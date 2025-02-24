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
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";

const POST_PER_PAGE = 5;

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const { page } = ctx.params as { page: string };
  const currentPage = parseInt(page);
  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const endIndex = startIndex + POST_PER_PAGE;
  const posts = getAllPosts().slice(startIndex, endIndex);
  const totalPage = Math.ceil(getAllPosts().length / POST_PER_PAGE);
  if (currentPage > totalPage) {
    return {
      redirect: {
        destination: "/blog",
        permanent: true,
      },
    };
  }
  return {
    props: {
      posts,
      page: currentPage,
      totalPage,
    },
  };
};

export const getStaticPaths = () => {
  const POST_COUNT = getAllPosts().length;

  return {
    paths: Array.from({ length: Math.ceil(POST_COUNT / POST_PER_PAGE) }).map(
      (_, i) => `/blog/${i + 1}`
    ),
    fallback: "blocking",
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
