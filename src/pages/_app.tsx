import type { AppProps } from "next/app";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import { Provider } from "@/components/ui/provider";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
