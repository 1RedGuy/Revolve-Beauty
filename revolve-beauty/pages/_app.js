import "../styles/global.css";
import { LanguageProvider } from "../context/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <SpeedInsights />
    </LanguageProvider>
  );
}

export default MyApp;

//npx prettier --write .
