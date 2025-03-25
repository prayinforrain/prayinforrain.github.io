import { Box, Card, HStack, Image, Tag, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import NextImage from "next/image";

interface CompanyItemProps {
  projectName: string;
  companyName: string;
  period: string;
  description: string | ReactNode;
  skills: string[];
  thumbnail: string;
}

const ProjectItem = ({
  projectName,
  companyName,
  period,
  description,
  skills,
  thumbnail,
}: CompanyItemProps) => {
  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Box w="full">
        <Card.Header>
          <Text>{projectName}</Text>
          <Text>{companyName}</Text>
          <Text>{period}</Text>
        </Card.Header>
        <Card.Body>
          <Text>{description}</Text>
        </Card.Body>
        <Card.Footer>
          <HStack gap={2}>
            {skills.map((skill) => (
              <Tag.Root key={skill} size="sm" colorScheme="blue">
                <Tag.Label>{skill}</Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
        </Card.Footer>
      </Box>
      <Image
        alt={projectName}
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
        _hover={{
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        }}
      >
        <NextImage src={thumbnail} alt={projectName} width={200} height={100} />
      </Image>
    </Card.Root>
  );
};

export default ProjectItem;
