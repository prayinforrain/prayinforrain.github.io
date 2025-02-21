import { Post } from "@/util/post";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  Heading,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";

interface ArticleCardProps {
  post: Post;
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <CardRoot key={post.slug} as="article" _hover={{ bg: "bg.subtle" }}>
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
        <Text fontSize="sm" color="gray.500" textAlign="right" w="full">
          {dayjs(post.createdAt).format("YYYY.MM.DD")}
        </Text>
      </CardFooter>
    </CardRoot>
  );
};

export default ArticleCard;
