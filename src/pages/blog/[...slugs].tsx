import MarkdownContent from "@/components/blog/MarkdownContent";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { getAllPosts } from "@/util/post";
import { Heading } from "@chakra-ui/react";
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

  console.log(post);
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
        <Heading size="lg" as="h1">
          {title}
        </Heading>
        <MarkdownContent content={content} />
      </article>
    </DefaultLayout>
  );
}
