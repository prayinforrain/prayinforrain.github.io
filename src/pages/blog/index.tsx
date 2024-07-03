import { getAllPosts } from "@/util/post";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostsPage({ posts }: { posts: { slug: string }[] }) {
  console.log(posts);
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}
