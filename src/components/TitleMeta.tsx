import React from 'react';
import Head from 'next/head';

type MetaTitleProps = { suffix?: string };

export const TitleMeta: React.FC<MetaTitleProps> = ({ suffix, children }) => {
  let title = children + (suffix ? ` - ${suffix}` : '');

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  );
};
