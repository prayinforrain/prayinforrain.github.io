import ENV from "@/util/env";
import NextHead from "next/head";
import { useRouter } from "next/router";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const MetaInformation = ({
  title,
  description,
  image = "/icon.png",
  url,
  type = "website",
}: HeadProps) => {
  const router = useRouter();
  const origin = ENV.BASE_URL;

  return (
    <NextHead>
      <title>{title ? `${title} - devWoo` : "devWoo"}</title>
      <meta name="description" content={description || "우재의 개발 블로그"} />
      <meta
        property="og:title"
        key="og:title"
        content={title ? `${title} - devWoo` : "devWoo"}
      />
      <meta
        property="og:description"
        key="og:description"
        content={description || "우재의 개발 블로그"}
      />
      <meta property="og:image" key="og:image" content={`${origin}${image}`} />
      <meta
        property="og:url"
        key="og:url"
        content={url || `${origin}${router.asPath}`}
      />
      <meta property="og:type" key="og:type" content={type} />
      {/* TODO: 구조화된 데이터 추가 */}
    </NextHead>
  );
};

export default MetaInformation;
