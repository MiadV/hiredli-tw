import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head>{/* TODO add favicon  */}</Head>
        <body className="antialiased bg-neutral-100 dark:bg-gray-800 text-slate-900 dark:text-white dark:highlight-white/5">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
