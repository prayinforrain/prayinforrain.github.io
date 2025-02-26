import { Post } from "@/util/post";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  CardRootProps,
  Heading,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";

interface ArticleCardProps extends CardRootProps {
  post: Post;
}

const ArticleCard = ({ post, ...props }: ArticleCardProps) => {
  return (
    <CardRoot
      key={post.slug}
      as="article"
      _hover={{ bg: "bg.subtle" }}
      {...props}
    >
      <CardHeader>
        <LinkOverlay asChild>
          <Link href={post.slug}>
            <Heading size="md" lineClamp={1}>
              {post.title}
            </Heading>
          </Link>
        </LinkOverlay>
      </CardHeader>
      <CardBody>
        <Text fontSize="sm" lineClamp={2}>
          {post.description || post.contentPreview}
        </Text>
      </CardBody>
      <CardFooter>
        <Text fontSize="sm" color="gray.500" textAlign="right" w="full" asChild>
          <time dateTime={post.createdAt}>
            {dayjs(post.createdAt).format("YYYY.MM.DD")}
          </time>
        </Text>
      </CardFooter>
    </CardRoot>
  );
};

export default ArticleCard;
