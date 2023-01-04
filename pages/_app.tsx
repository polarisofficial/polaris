import "../styles/dist/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Flex } from "@next/font/google";

const font = Roboto_Flex({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
