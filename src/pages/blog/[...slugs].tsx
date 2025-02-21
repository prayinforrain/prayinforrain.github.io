import DefaultLayout from "@/components/layout/DefaultLayout";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { getAllPosts } from "@/util/post";
import { Heading, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";

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

  const renderedContent = await serialize(post?.content ?? "", {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx",
    },
  });
  const { title, description, createdAt, updatedAt } = post;

  return {
    props: {
      content: renderedContent,
      title,
      description,
      createdAt,
      updatedAt,
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
}: PostPageProps) {
  return (
    <DefaultLayout>
      <article>
        <header>
          <Heading size="4xl" as="h1">
            {title}
          </Heading>
          <Text color="fg.subtle" fontStyle="italic">
            {description}
          </Text>
          <Stack direction="column" alignItems="flex-end" gap={1}>
            <Text fontSize="sm" display="flex" gap={1}>
              작성일:
              <time dateTime={dayjs(createdAt).toISOString()}>
                {dayjs(createdAt).format("YYYY.MM.DD")}
              </time>
            </Text>
            {updatedAt && updatedAt !== createdAt ? (
              <Text fontSize="sm" display="flex" gap={1}>
                최근 수정일:
                <time dateTime={dayjs(updatedAt).toISOString()}>
                  {dayjs(updatedAt).format("YYYY.MM.DD")}
                </time>
              </Text>
            ) : null}
          </Stack>
        </header>
        <section>
          <MarkdownContent content={content} />
        </section>
      </article>
    </DefaultLayout>
  );
}
