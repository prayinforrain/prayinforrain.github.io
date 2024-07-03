import dayjs from "dayjs";
import { readFileSync } from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";

const SEP = path.posix.sep;
const BASE_PATH = `posts`;
const POSTS_PATH = path.join(process.cwd(), `${BASE_PATH}`);

interface PostMatter {
  title: string;
  createdAt: string;
  updatedAt: string;
  draft?: boolean;
}

interface Post extends PostMatter {
  slug: string;
  content: string;
}

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = readFileSync(postPath, { encoding: "utf-8" });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;
    if (grayMatter.draft) return;
    return {
      ...grayMatter,
      content,
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace(".mdx", ""),
      createdAt: dayjs(grayMatter.createdAt).format("YYYY-MM-DD HH:mm"),
      updatedAt: dayjs(grayMatter.updatedAt).format("YYYY-MM-DD HH:mm"),
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}${SEP}**${SEP}*.mdx`);
  return postPaths.reduce<Post[]>((acc, curr) => {
    const post = parsePost(curr);
    if (!post) return acc;

    return [...acc, post];
  }, []);
};
