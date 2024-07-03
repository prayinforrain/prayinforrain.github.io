import dayjs from "dayjs";
import { readFileSync } from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";

export const SEP = path.posix.sep;
export const BASE_PATH = `posts`;
export const POSTS_PATH = path.join(process.cwd(), `${BASE_PATH}`);

interface PostMatter {
  title: string;
  createdAt: string;
  updatedAt: string;
  draft?: boolean;
}

interface Post extends PostMatter {
  slug: string;
  filePath: string;
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
      slug: `/blog${postPath
        .split(path.sep)
        .join("/")
        .slice(postPath.indexOf(BASE_PATH))
        .replace(BASE_PATH, "")
        .replace(".mdx", "")}`,
      filePath: postPath,
      createdAt: dayjs(grayMatter.createdAt).format("YYYY-MM-DD HH:mm"),
      updatedAt: dayjs(grayMatter.updatedAt).format("YYYY-MM-DD HH:mm"),
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}${SEP}**${SEP}*.mdx`);
  const res = postPaths.reduce<Post[]>((acc, curr) => {
    const post = parsePost(curr);
    if (!post) return acc;

    return [...acc, post];
  }, []);
  return res;
};
