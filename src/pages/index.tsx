import React from 'react';
import { BasicLayout } from '@/Layouts/BasicLayout';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <p>Index Page</p>
    </>
  );
}

Home.defaultProps = {
  layoutProps: {
    meta: {
      title: 'Find Jobs | Vacancies & Career opportunities',
    },
    Layout: BasicLayout,
  },
};
