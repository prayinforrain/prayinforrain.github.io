import DefaultLayout from "@/components/layout/DefaultLayout";
import MetaInformation from "@/components/layout/MetaInformation";
import { Button, EmptyState } from "@chakra-ui/react";
import Link from "next/link";
import { LuChevronRight, LuConstruction } from "react-icons/lu";

const About = () => {
  return (
    <DefaultLayout>
      <MetaInformation title="About" />
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuConstruction />
          </EmptyState.Indicator>
          <EmptyState.Title>공사중</EmptyState.Title>
          <EmptyState.Description>
            준비중인 페이지입니다. <br />
            이력서를 확인해주세요.
            <Button asChild variant="outline" display="flex" mt={4}>
              <Link
                href="https://docs.google.com/document/d/1AJHYFpaYrquhcOzxgD2mM6KW1_zBRMzNWUqd7726dNk/edit"
                target="_blank"
              >
                이력서 보기 <LuChevronRight />
              </Link>
            </Button>
          </EmptyState.Description>
        </EmptyState.Content>
      </EmptyState.Root>
    </DefaultLayout>
  );
};

export default About;
