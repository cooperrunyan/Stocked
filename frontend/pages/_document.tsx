import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export async function getInitialProps(ctx: DocumentContext): Promise<any> {
//   const sheet = new ServerStyleSheet();
//   const originalRenderPage = ctx.renderPage;

//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<Main {...props} />),
//       });

//     const initialProps = (await getInitialProps(ctx)) || {};
//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           {sheet.getStyleElement()}
//         </>
//       ),
//     };
//   } finally {
//     sheet.seal();
//   }
// }

// import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
// import { extractCritical } from '@emotion/server';

// export default class Doc extends Document {
//   static override async getInitialProps({ renderPage }: DocumentContext): Promise<DocumentInitialProps> {
//     const page = await renderPage();
//     const styles = extractCritical(page.html);
//     return {
//       ...page,
//       ...styles,
//     };
//   }

//   constructor(props: any) {
//     super(props);
//     const { __NEXT_DATA_, ids } = props;

//     if (ids && __NEXT_DATA_) {
//       __NEXT_DATA_.ids = ids;
//     }
//   }

//   override render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <meta charSet="utf-8" />
//           <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
//           <link rel="manifest" href="/manifest.json" />

//           <style dangerouslySetInnerHTML={{ __html: this.props.styles as any }}></style>

//           <meta name="apple-mobile-web-app-capable" content="yes" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
