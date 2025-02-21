import DefaultLayout from "@/components/layout/DefaultLayout";
import { serializeMdx } from "@/util/mdx";
import { getAllPosts } from "@/util/post";
import { Badge, Container, Heading, HStack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import path from "path";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post.slug),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/blog/${slugs.join(path.posix.sep)}`;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const renderedContent = await serializeMdx(post?.content ?? "");
  console.log(post);

  return {
    props: {
      title: post.title,
      description: post.description || "",
      content: renderedContent,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    },
  };
};

type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage({
  title,
  description,
  content,
  createdAt,
  updatedAt,
}: PostPageProps) {
  return (
    <DefaultLayout>
      <Container display="flex" flexDirection="column" as="article">
        <Heading as="h1" textStyle="3xl">
          {title}
        </Heading>
        <HStack justifyContent="flex-end">
          <Text asChild>
            <time dateTime={createdAt}>
              {dayjs(createdAt).locale("ko").format("YYYY.MM.DD(ddd)")}
            </time>
          </Text>
        </HStack>
        <MDXRemote {...content} />
      </Container>
    </DefaultLayout>
  );
}
