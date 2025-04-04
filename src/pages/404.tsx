import DefaultLayout from "@/components/layout/DefaultLayout";
import MetaInformation from "@/components/layout/MetaInformation";
import { Button, EmptyState } from "@chakra-ui/react";
import Link from "next/link";
import { LuChevronRight, LuFileQuestion } from "react-icons/lu";

const NotFound = () => {
  return (
    <DefaultLayout>
      <MetaInformation title="Not Found" />
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuFileQuestion />
          </EmptyState.Indicator>
          <EmptyState.Title>찾을 수 없는 페이지입니다.</EmptyState.Title>
          <EmptyState.Description>
            존재하지 않는 페이지입니다.
            <br />
            만료된 링크로 접속한 경우 이전 블로그 게시글을 확인해 주세요.
            <Button asChild variant="outline" display="flex" mt={4}>
              <Link href="/archived-blog/posts">
                이전 블로그 게시글 확인 <LuChevronRight />
              </Link>
            </Button>
          </EmptyState.Description>
        </EmptyState.Content>
      </EmptyState.Root>
    </DefaultLayout>
  );
};

export default NotFound;
