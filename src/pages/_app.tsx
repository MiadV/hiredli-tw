import '@/css/fonts.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
//
import '@/css/main.css';
import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
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
    <ThemeProvider attribute="class" defaultTheme="system">
      <TitleMeta suffix="Hiredli">{meta?.title}</TitleMeta>
      <Header />
      <Layout {...layoutPropsObj}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
