import "../styles/index.css";
import "../styles/listedinv.css";
import "../styles/listings.css";
import "../styles/makerequest.css";
import "../styles/manageoffers.css";
import "../styles/requests.css";
import "../styles/uploadinv.css";
import "../styles/components/authcontainer.css";
import "../styles/components/authlogincontent.css";
import "../styles/components/authregistercontent.css";
import "../styles/components/modal.css";
import "../styles/components/VNavBar.css";
import "../styles/components/detail.css";
import "../styles/components/requestcard.css";
import "../styles/components/searchbar.css";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}
