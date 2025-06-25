import { Post } from "@/util/post";
import {
  Box,
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  CardRootProps,
  Heading,
  Image,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import NextImage from "next/image";
import Link from "next/link";

interface ArticleCardProps extends CardRootProps {
  post: Partial<Post>;
}

const ArticleCard = ({ post, ...props }: ArticleCardProps) => {
  const bodyText = post.description || post.contentPreview;
  return (
    <CardRoot
      key={post.slug}
      as="article"
      _hover={{ bg: "bg.subtle" }}
      flexDirection="row"
      overflow="hidden"
      {...props}
    >
      <Box w="full">
        <CardHeader>
          <LinkOverlay asChild>
            <Link href={post.slug || ""}>
              <Heading size="md" lineClamp={1}>
                {post.title}
              </Heading>
            </Link>
          </LinkOverlay>
        </CardHeader>
        {bodyText && (
          <CardBody>
            <Text fontSize="sm" lineClamp={2} whiteSpace="pre-wrap">
              {bodyText}
            </Text>
          </CardBody>
        )}
        <CardFooter>
          {post.createdAt && (
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="right"
              w="full"
              asChild
            >
              <time dateTime={post.createdAt}>
                {dayjs(post.createdAt).format("YYYY.MM.DD")}
              </time>
            </Text>
          )}
        </CardFooter>
      </Box>
      {post.thumbnail && (
        <Image
          alt={post.title}
          rounded="md"
          fit="cover"
          asChild
          marginX="auto"
          h="full"
          alignSelf="center"
          maskImage="linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0))"
          maskSize="80%"
          maskRepeat="no-repeat"
          maskPosition="right"
          position="absolute"
          pointerEvents="none"
          right={0}
        >
          <NextImage
            src={post.thumbnail}
            alt={post.title || ""}
            width={200}
            height={100}
          />
        </Image>
      )}
    </CardRoot>
  );
};

export default ArticleCard;
