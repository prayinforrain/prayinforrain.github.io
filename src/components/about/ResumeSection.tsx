import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

const ResumeSection = ({ title, children }: ResumeSectionProps) => {
  return (
    <Box as="section" py={8}>
      <Heading as="h2" fontSize="2xl" mb={6} color="fg">
        {title}
      </Heading>
      <Stack direction="column" gap={4}>
        {children}
      </Stack>
    </Box>
  );
};

export default ResumeSection;
