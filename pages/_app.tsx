import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/koho/200.css";
import "@fontsource/koho/300.css";
import "@fontsource/koho/400.css";
import "@fontsource/koho/500.css";
import "@fontsource/koho/600.css";
import "@fontsource/koho/700.css";
import "antd/dist/antd.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import MasterLayout from "../components/Layouts/MasterLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MasterLayout>
          <Component {...pageProps} />
        </MasterLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
