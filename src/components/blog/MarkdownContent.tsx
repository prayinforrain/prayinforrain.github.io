import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Prose } from "../ui/prose";

type MarkdownContentProps = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <Prose>
      <MDXRemote {...content} />
    </Prose>
  );
};

export default MarkdownContent;
