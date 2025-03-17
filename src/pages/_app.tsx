import type { AppProps } from "next/app";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import ENV from "@/util/env";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
      <Toaster />
      {/* Analytics */}
      {process.env.NODE_ENV === "production" ? (
        <>
          <GoogleAnalytics gaId={ENV.GOOGLE_ANALYTICS_ID} />
          <GoogleTagManager gtmId={ENV.GOOGLE_TAG_MANAGER_ID} />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type="text/javascript"
            src="//wcs.naver.net/wcslog.js"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
          if(!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "${ENV.NAVER_ANALYTICS_ID}";
          if(window.wcs) {
            wcs_do();
          }
          `,
            }}
          />
        </>
      ) : null}
    </Provider>
  );
}
