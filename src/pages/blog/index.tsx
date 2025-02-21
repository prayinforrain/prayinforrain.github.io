import DefaultLayout from "@/components/layout/DefaultLayout";
import { getAllPosts } from "@/util/post";
import { Container, Heading, Stack } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostsPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
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
        </Container>
      </main>
    </DefaultLayout>
  );
}
