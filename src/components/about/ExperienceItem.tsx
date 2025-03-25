import { Box, Heading, Text, Stack, Tag } from "@chakra-ui/react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceItemProps) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" borderColor="border">
      <Stack direction="column" gap={2}>
        <Stack direction="row" justify="space-between">
          <Heading as="h3" fontSize="lg" color="fg">
            {title}
          </Heading>
          <Text fontSize="sm" color="fg.muted">
            {period}
          </Text>
        </Stack>
        <Text fontSize="md" color="fg.muted" fontWeight="medium">
          {company}
        </Text>
        <Text color="fg.muted" whiteSpace="pre-line">
          {description}
        </Text>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {skills.map((skill) => (
            <Tag.Root key={skill} size="sm" colorScheme="blue">
              <Tag.Label>{skill}</Tag.Label>
            </Tag.Root>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExperienceItem;
