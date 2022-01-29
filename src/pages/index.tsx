import React from 'react';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { FeaturedJobs } from '@/components/FeaturedJobs';
import { LatestJobs } from '../components/LatestJobs';
import { TopCompanies } from '../components/TopCompanies';

export default function Home() {
  return (
    <>
      <Hero />
      <main className='max-w-screen-xl mx-auto px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>
          <FeaturedJobs />
          <LatestJobs />
          <TopCompanies />
        </div>
      </main>
      <Footer />
    </>
  );
}

Home.defaultProps = {
  layoutProps: {
    meta: {
      title: 'Find Jobs | Vacancies & Career opportunities',
    },
  },
};
