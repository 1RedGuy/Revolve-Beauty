import "../styles/global.css";
import { LanguageProvider } from "../context/LanguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;

//npx prettier --write .
