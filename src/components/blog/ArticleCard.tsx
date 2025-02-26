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
  post: Post;
}

const ArticleCard = ({ post, ...props }: ArticleCardProps) => {
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
          right={0}
        >
          <NextImage
            src={post.thumbnail}
            alt={post.title}
            width={200}
            height={100}
          />
        </Image>
      )}
    </CardRoot>
  );
};

export default ArticleCard;
