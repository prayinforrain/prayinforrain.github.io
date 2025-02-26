import DefaultLayout from "@/components/layout/DefaultLayout";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { getAllPosts } from "@/util/post";
import {
  Box,
  Container,
  Heading,
  Image,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";
import MetaInformation from "@/components/layout/MetaInformation";
import NextImage from "next/image";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post.slug),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/blog/post/${slugs.join(path.posix.sep)}`;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const renderedContent = await serialize(post?.content ?? "", {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx",
    },
  });
  const { title, description, createdAt, updatedAt, thumbnail } = post;

  return {
    props: {
      content: renderedContent,
      title,
      description,
      createdAt,
      updatedAt,
      thumbnail,
    },
  };
};

type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage({
  content,
  title,
  description,
  createdAt,
  updatedAt,
  thumbnail,
}: PostPageProps) {
  return (
    <DefaultLayout>
      <MetaInformation title={title} description={description} type="article" />
      <Container as="article" px={4} py={4}>
        <Box as="header" p={4}>
          <Heading size="3xl" as="h1">
            {title}
          </Heading>
          <Text color="fg.subtle" fontStyle="italic">
            {description}
          </Text>
          <Stack direction="column" alignItems="flex-end" gap={1} mt={2}>
            <Text fontSize="sm" display="flex" gap={1} className="created-at">
              작성일:
              <time dateTime={dayjs(createdAt).toISOString()}>
                {dayjs(createdAt).format("YYYY.MM.DD")}
              </time>
            </Text>
            {updatedAt && updatedAt !== createdAt ? (
              <Text fontSize="sm" display="flex" gap={1} className="updated-at">
                최근 수정일:
                <time dateTime={dayjs(updatedAt).toISOString()}>
                  {dayjs(updatedAt).format("YYYY.MM.DD")}
                </time>
              </Text>
            ) : null}
          </Stack>
        </Box>
        <Separator my={3} mx="auto" maxW="70ch" />
        <Container as="section" p={4}>
          {thumbnail && (
            <Image
              rounded="md"
              w="65ch"
              fit="cover"
              asChild
              marginX="auto"
              maxH="480px"
              alt="thumbnail"
            >
              <NextImage
                src={thumbnail}
                alt="thumbnail"
                width={768}
                height={400}
                priority
              />
            </Image>
          )}
          <MarkdownContent content={content} />
        </Container>
      </Container>
    </DefaultLayout>
  );
}
