import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Revolve Beauty Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional beauty treatments and services in Sofia, Bulgaria. Offering facials, fillers, botox, and more." />
        <meta name="keywords" content="beauty studio, facial treatments, botox, fillers, Sofia" />
        <meta property="og:title" content="Revolve Beauty Studio" />
        <meta property="og:description" content="Professional beauty treatments in Sofia" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 