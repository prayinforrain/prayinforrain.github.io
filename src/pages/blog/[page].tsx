import ArticleCard from "@/components/blog/ArticleCard";
import DefaultLayout from "@/components/layout/DefaultLayout";
import MetaInformation from "@/components/layout/MetaInformation";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { getAllPosts } from "@/util/post";
import {
  Container,
  Heading,
  HStack,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

const POST_PER_PAGE = 5;

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const { page } = ctx.params as { page: string };
  const currentPage = parseInt(page);
  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const endIndex = startIndex + POST_PER_PAGE;
  const postData = getAllPosts().slice(startIndex, endIndex);
  const posts = postData.map(({ content, ...rest }) => rest);
  const total = getAllPosts().length;
  if (currentPage > total) {
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
      total,
    },
  };
};

export const getStaticPaths = () => {
  const POST_COUNT = getAllPosts().length;

  return {
    paths: Array.from({ length: Math.ceil(POST_COUNT / POST_PER_PAGE) }).map(
      (_, i) => `/blog/${i + 1}`
    ),
    fallback: false,
  };
};

export default function PostsPage({
  posts,
  page,
  total,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const totalPage = Math.ceil(total / POST_PER_PAGE);
  return (
    <DefaultLayout>
      <MetaInformation title="Blog" />
      <main>
        <Container as="section">
          <VisuallyHidden asChild>
            <Heading size="xl" as="h2">
              Blog Posts
            </Heading>
          </VisuallyHidden>
          <Stack gap={4} my={4}>
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} size="sm" />
            ))}
            {page === totalPage && (
              <ArticleCard
                post={{
                  slug: "/archived-blog/posts",
                  title: "이전 포스트 더 보기",
                  description: "2025년 이전 포스트는 여기서 확인해 주세요.",
                  content: "",
                  contentPreview: "",
                  filePath: "",
                  thumbnail: "/images/archived-blog.png",
                }}
                size="sm"
              />
            )}
          </Stack>
          <PaginationRoot
            w="full"
            count={total}
            page={page}
            pageSize={POST_PER_PAGE}
            getHref={(p) => `/blog/${p}`}
          >
            <HStack gap={1} w="full" justifyContent="center">
              <PaginationPrevTrigger disabled={page === 1} />
              <PaginationItems />
              <PaginationNextTrigger disabled={page === total} />
            </HStack>
          </PaginationRoot>
        </Container>
      </main>
    </DefaultLayout>
  );
}
