import React from 'react';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { FeaturedJobs } from '@/components/FeaturedJobs';
import { LatestJobs } from '@/components/LatestJobs';
import { TopCompanies } from '@/components/TopCompanies';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
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
