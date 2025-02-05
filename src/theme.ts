import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      colorPalette: "cyan",
    },
  },
  theme: {
    tokens: {
      // colors: {
      //   green: {
      //     50: { value: "#f9fefb" }, // green10
      //     100: { value: "#f1fbf6" }, // green20
      //     200: { value: "#e9f8f1" }, // green30
      //     300: { value: "#d0f8e5" }, // green40
      //     400: { value: "#b3f2d0" }, // green50
      //     500: { value: "#50d38d" }, // green70
      //     600: { value: "#00af66" }, // green90 (primary color)
      //     700: { value: "#009c5b" }, // green100
      //     800: { value: "#017a47" }, // green120
      //     900: { value: "#0d472f" }, // green140
      //     950: { value: "#0d3323" }, // green150
      //   },
      //   red: {
      //     50: { value: "#fffbfb" }, // red10
      //     100: { value: "#fff6f6" }, // red20
      //     200: { value: "#fff1f1" }, // red30
      //     300: { value: "#ffe5e5" }, // red40
      //     400: { value: "#ffcfcf" }, // red50
      //     500: { value: "#ff9c9c" }, // red70
      //     600: { value: "#fb7171" }, // red90 (primary color)
      //     700: { value: "#ef5855" }, // red100
      //     800: { value: "#c63835" }, // red120
      //     900: { value: "#671514" }, // red140
      //     950: { value: "#371110" }, // red150
      //   },
      //   blue: {
      //     50: { value: "#f4fcff" }, // blue10
      //     100: { value: "#edfafe" }, // blue20
      //     200: { value: "#e5f7ff" }, // blue30
      //     300: { value: "#d1f0ff" }, // blue40
      //     400: { value: "#b4e6ff" }, // blue50
      //     500: { value: "#44c4ff" }, // blue70
      //     600: { value: "#00a7f4" }, // blue90 (primary color)
      //     700: { value: "#0094e4" }, // blue100
      //     800: { value: "#006dc0" }, // blue120
      //     900: { value: "#084883" }, // blue140
      //     950: { value: "#08345e" }, // blue150
      //   },
      //   yellow: {
      //     50: { value: "#fffcf7" }, // yellow10
      //     100: { value: "#fff9ef" }, // yellow20
      //     200: { value: "#fef7e7" }, // yellow30
      //     300: { value: "#fcf2d9" }, // yellow40
      //     400: { value: "#ffe8ad" }, // yellow50
      //     500: { value: "#ffce4e" }, // yellow70
      //     600: { value: "#ffa800" }, // yellow90 (primary color)
      //     700: { value: "#f59300" }, // yellow100
      //     800: { value: "#c26b04" }, // yellow120
      //     900: { value: "#593306" }, // yellow140
      //     950: { value: "#33220d" }, // yellow150
      //   },
      //   // chakra-ui 기본 외의 색상 팔레트
      //   mint: {
      //     50: { value: "#f5fefd" }, // mint10
      //     100: { value: "#ecfdfb" }, // mint20
      //     200: { value: "#e3fbf8" }, // mint30
      //     300: { value: "#ccf4f0" }, // mint40
      //     400: { value: "#a5f0e9" }, // mint50
      //     500: { value: "#34d5da" }, // mint70
      //     600: { value: "#01b6c1" }, // mint90 (primary color)
      //     700: { value: "#009bb3" }, // mint100
      //     800: { value: "#007493" }, // mint120
      //     900: { value: "#0e4557" }, // mint140
      //     950: { value: "#083240" }, // mint150
      //   },
      //   purple: {
      //     50: { value: "#fdfbff" }, // purple10
      //     100: { value: "#fbf6ff" }, // purple20
      //     200: { value: "#f6efff" }, // purple30
      //     300: { value: "#f0e8ff" }, // purple40
      //     400: { value: "#e5d7ff" }, // purple50
      //     500: { value: "#d1abff" }, // purple70
      //     600: { value: "#ba84ff" }, // purple90 (primary color)
      //     700: { value: "#ae6dff" }, // purple100
      //     800: { value: "#8643da" }, // purple120
      //     900: { value: "#502a80" }, // purple140
      //     950: { value: "#311f47" }, // purple150
      //   },
      //   pink: {
      //     50: { value: "#fff9fc" }, // pink10
      //     100: { value: "#fff5fa" }, // pink20
      //     200: { value: "#fff0f8" }, // pink30
      //     300: { value: "#ffe2f2" }, // pink40
      //     400: { value: "#ffcfe9" }, // pink50
      //     500: { value: "#fd97ce" }, // pink70
      //     600: { value: "#f169b3" }, // pink90 (primary color)
      //     700: { value: "#e857a5" }, // pink100
      //     800: { value: "#bc3e83" }, // pink120
      //     900: { value: "#661b44" }, // pink140
      //     950: { value: "#361728" }, // pink150
      //   },
      //   brown: {
      //     50: { value: "#fffbf8" }, // brown10
      //     100: { value: "#fff7f2" }, // brown20
      //     200: { value: "#ffefe6" }, // brown30
      //     300: { value: "#ffe6d8" }, // brown40
      //     400: { value: "#ffd6c5" }, // brown50
      //     500: { value: "#f6af99" }, // brown70
      //     600: { value: "#c48672" }, // brown90 (primary color)
      //     700: { value: "#aa7362" }, // brown100
      //     800: { value: "#715248" }, // brown120
      //     900: { value: "#3e2c28" }, // brown140
      //     950: { value: "#32221f" }, // brown150
      //   },
      // },
      fonts: {
        body: { value: "Pretendard" },
        heading: { value: "Pretendard" },
      },
    },
  },
});
