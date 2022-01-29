import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

const topCompaniesItems = [
  {
    companyName: 'Rempel and Sons',
    category: 'Media & Marketing',
    image: '/img/08.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Dietrich, Beahan and Connelly',
    category: 'Tourism',
    image: '/img/09.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Gutmann LLC',
    category: 'Oil & Gas',
    image: '/img/10.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Kerluke Group',
    category: 'Accounting',
    image: '/img/11.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Hahn LLC',
    category: 'Food & Beverage',
    image: '/img/12.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Ziemann, Nicolas and Grady',
    category: 'Construction',
    image: '/img/04.jpg',
    logo: '/img/logo.jpg',
  },
];

export const TopCompanies = () => {
  return (
    <section id='top-companies'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-2xl font-bold'>Top Companies</h2>
        <Button variant='outline' className='hidden xs:inline-flex'>
          Show All
        </Button>
      </div>

      <div
        id='top-companies__items'
        className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      >
        {topCompaniesItems.map((item, i) => (
          <Link href='/#' key={i}>
            <a className='group block bg-white dark:bg-slate-700 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-1'>
              <div className='relative block pt-[70%]  overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.companyName}
                  layout='fill'
                  objectFit='cover'
                  className='transition-all duration-200 group-hover:scale-[102%]'
                />
              </div>

              <div className='relative flex flex-col p-4 border-t dark:border-slate-600'>
                <span className='block w-[80px] h-[80px] absolute right-4 -top-[65px] overflow-hidden rounded-lg border dark:border-slate-600 shadow-sm'>
                  <div className='relative block pt-[100%]  overflow-hidden'>
                    <Image
                      src={item.logo}
                      alt={item.companyName}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </span>

                <h5 className='truncate capitalize block text-xl font-semibold'>
                  {item.companyName}
                </h5>
                <span className='truncate block text-slate-500 dark:text-slate-400'>
                  {item.category}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};
