import { Blockquote, Heading, Link, List, Text } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type MarkdownContentProps = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <MDXRemote
      components={{
        h1: (props) => <Heading textStyle="3xl" as="h1" {...props} />,
        h2: (props) => <Heading textStyle="2xl" as="h2" {...props} />,
        h3: (props) => <Heading textStyle="xl" as="h3" {...props} />,
        h4: (props) => <Heading textStyle="lg" as="h4" {...props} />,
        h5: (props) => <Heading textStyle="lg" as="h5" {...props} />,
        h6: (props) => <Heading textStyle="lg" as="h6" {...props} />,
        p: Text,
        a: Link,
        ul: (props) => <List.Root {...props} />,
        ol: (props) => <List.Root as="ol" {...props} />,
        li: List.Item,
        blockquote: (props) => <Blockquote.Root {...props} />,
      }}
      {...content}
    />
  );
};

export default MarkdownContent;
