import React from "react";
import Head from "next/head";

const defaultMeta = {
  title: "Job Seeking Landing Page - Miad V",
  description: "Exprimental Project",
};

const SEO: React.FC<any> = ({ children, ...customMeta }) => {
  const meta = {
    ...defaultMeta,
    ...customMeta,
  };
  return (
    <Head>
      <meta name="robots" content="noindex" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
  );
};

export default SEO;
