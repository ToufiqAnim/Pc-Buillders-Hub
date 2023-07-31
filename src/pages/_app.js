import CustomFooter from "@/components/RootLayout/Footer";
import Navbar from "@/components/RootLayout/Navbar";
import RootLayout from "@/components/RootLayout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import Root from "postcss/lib/root";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </RootLayout>
    </SessionProvider>
  );
}
