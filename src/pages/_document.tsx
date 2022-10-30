import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="#1b1d20" />

          <meta
            name="application-name"
            content="Horários de Aula - UFRN & IFRN"
          />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Horários de Aula - UFRN & IFRN"
          />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#1b1d20" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://horarios-de-aula.vercel.app/"
          />
          <meta
            property="og:site_name"
            content="Horários de Aula - UFRN & IFRN"
          />
          <meta
            property="og:keywords"
            content="horários de aula, faculdade, ifrn, ufrn, horários, universidade, faculdade, horário de aula, aula, horário"
          />
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:title" content="Horários de Aula - UFRN & IFRN" />
          <meta
            property="og:description"
            content="Encontre facilmente os horários de aulas atualizados da UFRN e do IFRN!"
          />
          <meta
            name="description"
            content="Encontre facilmente os horários de aulas atualizados da UFRN e do IFRN!"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@perpetua_tech" />
          <meta property="twitter:site:id" content="@perpetua_tech" />
          <meta property="twitter:creator" content="@perpetua_tech" />
          <meta property="twitter:creator:id" content="@perpetua_tech" />
          <meta
            property="twitter:url"
            content="https://horarios-de-aula.vercel.app/"
          />
          <meta name="twitter:title" content="Horários de Aula - UFRN & IFRN" />
          <meta
            name="twitter:description"
            content="Encontre facilmente os horários de aulas atualizados da UFRN e do IFRN!"
          />

          {/* <meta property="og:image" content="TODO" />
          <meta property="twitter:image" content="TODO" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
