import type { AppProps } from "next/app";
import { StylesGlobal } from "../styles/stylesGlobal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StylesGlobal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
