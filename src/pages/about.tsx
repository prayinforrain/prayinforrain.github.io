import DefaultLayout from "@/components/layout/DefaultLayout";
import MetaInformation from "@/components/layout/MetaInformation";
import ExperienceItem from "@/components/about/ExperienceItem";
import ResumeSection from "@/components/about/ResumeSection";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { LuGithub, LuMail, LuGlobe } from "react-icons/lu";
import ProjectItem from "@/components/about/ProjectItem";

const About = () => {
  return (
    <DefaultLayout>
      <MetaInformation title="이력서 | 이우재" />
      <Container maxW="container.md" py={10}>
        <Stack direction="column" gap={8}>
          {/* 소개 섹션 */}
          <Box textAlign="center" mb={8}>
            <Heading as="h1" size="xl" mb={4}>
              이우재
            </Heading>
            <Text fontSize="lg" color="fg.muted" mb={6}>
              프론트엔드 개발자
            </Text>
            <Stack direction="row" gap={4} justify="center">
              <Link href="https://github.com/woodi97" target="_blank">
                <Stack direction="row" alignItems="center" gap={2}>
                  <Icon as={LuGithub} />
                  <Text>GitHub</Text>
                </Stack>
              </Link>
              <Link href="mailto:woodi.daily@gmail.com">
                <Stack direction="row" alignItems="center" gap={2}>
                  <Icon as={LuMail} />
                  <Text>Email</Text>
                </Stack>
              </Link>
              <Link href="https://devwoo.vercel.app" target="_blank">
                <Stack direction="row" alignItems="center" gap={2}>
                  <Icon as={LuGlobe} />
                  <Text>Blog</Text>
                </Stack>
              </Link>
            </Stack>
          </Box>

          <ProjectItem
            projectName="레어노트"
            companyName="휴먼스케이프"
            period="2023.01 - 현재"
            description="• Next.js와 TypeScript를 활용한 웹 애플리케이션 개발
• 반응형 웹 디자인 구현 및 성능 최적화
• 컴포넌트 기반 아키텍처 설계 및 구현"
            thumbnail="/images/about/rarenote-web.png"
            skills={["React", "TypeScript", "Next.js", "Chakra UI"]}
          />

          {/* 소개 섹션 */}
          <ResumeSection title="About Me">
            <Text color="fg.muted">
              안녕하세요, 1년차 프론트엔드 개발자 이우재입니다. 사용자 경험을
              개선하고 최신 웹 기술을 활용하여 효율적이고 아름다운 웹
              애플리케이션을 만드는 것에 열정을 가지고 있습니다. React와
              TypeScript를 주력으로 사용하며, 지속적인 학습과 성장을 추구합니다.
            </Text>
          </ResumeSection>

          {/* 경력 섹션 */}
          <ResumeSection title="Experience">
            <ExperienceItem
              title="프론트엔드 개발자"
              company="회사명"
              period="2023.01 - 현재"
              description={`• Next.js와 TypeScript를 활용한 웹 애플리케이션 개발
• 반응형 웹 디자인 구현 및 성능 최적화
• 컴포넌트 기반 아키텍처 설계 및 구현`}
              skills={["React", "TypeScript", "Next.js", "Chakra UI"]}
            />
          </ResumeSection>

          {/* 기술 스택 섹션 */}
          <ResumeSection title="Skills">
            <Box>
              <Text fontWeight="bold" mb={2} color="fg">
                프론트엔드
              </Text>
              <Text color="fg.muted">
                React, TypeScript, Next.js, HTML5, CSS3, JavaScript
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2} color="fg">
                UI 라이브러리
              </Text>
              <Text color="fg.muted">
                Chakra UI, Tailwind CSS, Styled-Components
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2} color="fg">
                개발 도구
              </Text>
              <Text color="fg.muted">Git, VS Code, Figma</Text>
            </Box>
          </ResumeSection>

          {/* 교육 섹션 */}
          <ResumeSection title="Education">
            <Box>
              <Text fontWeight="bold" color="fg">
                컴퓨터공학과
              </Text>
              <Text color="fg.muted">OO대학교 (2019.03 - 2023.02)</Text>
            </Box>
          </ResumeSection>
        </Stack>
      </Container>
    </DefaultLayout>
  );
};

export default About;
