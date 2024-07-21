import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SolvedProvider } from "@/context/SolvedContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SolvedProvider>
      <Component {...pageProps} />
    </SolvedProvider>
  );
}
