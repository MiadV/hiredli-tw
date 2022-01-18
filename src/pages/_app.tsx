import '@/css/fonts.css';
import '@/css/main.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { Header } from '@/components/Header';
import { LayoutProps } from '@/types';
import { TitleMeta } from '@/components/TitleMeta';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ layoutProps: LayoutProps }>) {
  const layoutProps = Component.defaultProps?.layoutProps;
  const Layout = (layoutProps && layoutProps.Layout) || Fragment;

  const layoutPropsObj =
    layoutProps && layoutProps.Layout ? { layoutProps: layoutProps } : {};

  const meta = layoutProps && layoutProps.meta;

  return (
    <>
      <TitleMeta suffix="Hiredly">{meta?.title}</TitleMeta>
      <Header />
      <Layout {...layoutPropsObj}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
