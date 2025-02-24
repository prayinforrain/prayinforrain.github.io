import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Prose } from "../ui/prose";
import { Clipboard, IconButton } from "@chakra-ui/react";
import { LuCheck, LuLink } from "react-icons/lu";
import { toaster } from "../ui/toaster";
import ENV from "@/util/env";

type MarkdownContentProps = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

const getInnerText = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(getInnerText).join("");
  }

  if (
    typeof children === "object" &&
    children !== null &&
    "props" in children
  ) {
    return getInnerText((children as any).props.children);
  }

  return "";
};

const LinkButton = ({ children }: { children: React.ReactNode }) => {
  const href = `${ENV.BASE_URL}/blog/${getInnerText(children)
    .toLowerCase()
    .replace(/ /g, "-")}`;

  return (
    <Clipboard.Root value={href} display="inline-flex">
      <Clipboard.Trigger asChild>
        <IconButton
          variant="ghost"
          size="xs"
          ml={2}
          onClick={() => {
            toaster.create({
              description: "링크를 클립보드에 복사했습니다.",
              duration: 1000,
            });
          }}
        >
          <Clipboard.Indicator copied={<LuCheck />}>
            <LuLink />
          </Clipboard.Indicator>
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <Prose>
      <MDXRemote
        {...content}
        components={{
          h1: ({ children }) => (
            <h1 id={getInnerText(children).toLowerCase().replace(/ /g, "-")}>
              {children}
              <LinkButton>{children}</LinkButton>
            </h1>
          ),
          h2: ({ children }) => (
            <h2 id={getInnerText(children).toLowerCase().replace(/ /g, "-")}>
              {children}
              <LinkButton>{children}</LinkButton>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={getInnerText(children).toLowerCase().replace(/ /g, "-")}>
              {children}
              <LinkButton>{children}</LinkButton>
            </h3>
          ),
          h4: ({ children }) => (
            <h4 id={getInnerText(children).toLowerCase().replace(/ /g, "-")}>
              {children}
              <LinkButton>{children}</LinkButton>
            </h4>
          ),
          h5: ({ children }) => (
            <h5 id={getInnerText(children).toLowerCase().replace(/ /g, "-")}>
              {children}
              <LinkButton>{children}</LinkButton>
            </h5>
          ),
          h6: ({ children }) => (
            <h6 id={getInnerText(children).toLowerCase().replace(/ /g, "-")}>
              {children}
              <LinkButton>{children}</LinkButton>
            </h6>
          ),
        }}
      />
    </Prose>
  );
};

export default MarkdownContent;
