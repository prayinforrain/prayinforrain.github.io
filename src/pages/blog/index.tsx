import { getAllPosts } from "@/util/post";
import path from "path";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostsPage({ posts }: { posts: { slug: string }[] }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <a
            href={`${post.slug
              .replace(/\\/g, "/")
              .replace(`posts${path.posix.sep}`, "")
              .split(path.sep)
              .join(path.posix.sep)}`}
          >
            {post.slug}
          </a>
        </li>
      ))}
    </ul>
  );
}
