import React from 'react';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';

export default function Home() {
  return (
    <>
      <Hero />
      <main className='max-w-screen-xl mx-auto px-8'>
        <div className='mt-16'>
          <FeaturedJobs />
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

const FeaturedJobs = () => {
  return (
    <section id='featured_jobs'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>Featured Jobs</h2>
        <Button variant='outline'>Show All</Button>
      </div>
      <div className='flex space-x-2 whitespace-nowrap overflow-x-auto py-2'>
        <Chip label='all' active />
        <Chip label='Sales (Corporate, Real Estate, Telesales, etc.)' />
        <Chip label='Sales (Corporate, Real Estate, Telesales, etc.)' />
        <Chip label='Sales (Corporate, Real Estate, Telesales, etc.)' />
        <Chip label='Sales (Corporate, Real Estate, Telesales, etc.)' />
        <Chip label='Sales (Corporate, Real Estate, Telesales, etc.)' />
      </div>
    </section>
  );
};
