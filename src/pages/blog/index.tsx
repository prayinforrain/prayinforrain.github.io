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
import { InferGetStaticPropsType } from "next";

const POST_PER_PAGE = 5;

export const getStaticProps = () => {
  const posts = getAllPosts();
  const postsWithoutContent = posts.map(({ content, ...rest }) => rest);
  return {
    props: {
      posts: postsWithoutContent.slice(0, POST_PER_PAGE),
      page: 1,
      total: posts.length,
    },
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
                  description:
                    "2025년 이전에 작성한 포스트를 마이그레이션 중입니다.\n더 많은 포스트는 이전 블로그에서 확인해 주세요.",
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
