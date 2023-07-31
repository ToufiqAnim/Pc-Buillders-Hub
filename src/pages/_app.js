import CustomFooter from "@/components/RootLayout/Footer";
import Navbar from "@/components/RootLayout/Navbar";
import RootLayout from "@/components/RootLayout/RootLayout";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import Root from "postcss/lib/root";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}
