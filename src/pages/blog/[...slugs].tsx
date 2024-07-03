import { serializeMdx } from "@/util/mdx";
import { getAllPosts } from "@/util/post";
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

  return {
    props: {
      content: renderedContent,
    },
  };
};

type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage({ content }: PostPageProps) {
  return (
    <div>
      <MDXRemote {...content} />
    </div>
  );
}
