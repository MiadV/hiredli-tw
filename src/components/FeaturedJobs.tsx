import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FreeMode, Mousewheel, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';

const featuredJobsCategories = [
  'Sales (Corporate, Real Estate, Telesales, etc.)',
  'Customer Service',
  'Other',
  'Creative Writing',
  'Project Management',
  'Marketing - Digital',
  'IT - Software Development',
  'Human Resources',
  'Accounting & Finance',
];

const featuredJobsItems = [
  {
    companyName: 'Kerluke Group',
    jobTitle: 'Actuary',
    image: '/img/01.jpg',
  },
  {
    companyName: 'Witting, Bauch and Cartwright',
    jobTitle: 'Accounting Assistant II',
    image: '/img/02.jpg',
  },
  {
    companyName: 'Hahn LLC',
    jobTitle: 'Environmental Specialist',
    image: '/img/03.jpg',
  },
  {
    companyName: 'Ziemann, Nicolas and Grady',
    jobTitle: 'Web Designer IV',
    image: '/img/04.jpg',
  },
  {
    companyName: 'Bernhard and Sons',
    jobTitle: 'Teacher',
    image: '/img/05.jpg',
  },
  {
    companyName: 'Kassulke, Reynolds and Armstrong',
    jobTitle: 'Structural Analysis Engineer',
    image: '/img/06.jpg',
  },
  {
    companyName: 'Kihn-Jast',
    jobTitle: 'Technical Writer',
    image: '/img/07.jpg',
  },
];

export const FeaturedJobs = () => {
  return (
    <section id='featured-jobs'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Featured Jobs</h2>
        <Button variant='outline' className='hidden xs:inline-flex'>
          Show All
        </Button>
      </div>
      <div className='mb-4 featured-jobs__categories'>
        <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction='horizontal'
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true, hide: true }}
          slidesPerView='auto'
          spaceBetween={8}
          id='featured-jobs__categories__slider'
          className='!py-4'
        >
          <SwiperSlide className='!w-auto'>
            <Chip label='all' active />
          </SwiperSlide>
          {featuredJobsCategories.map((item, i) => (
            <SwiperSlide key={i} className='!w-auto'>
              <Chip label={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div id='featured-jobs__items' className='!-m-4'>
        <Swiper
          className='!p-4' // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            '475': {
              slidesPerView: 2,
            },
            '640': {
              slidesPerView: 3,
            },
            '1024': {
              slidesPerView: 4,
            },
          }}
        >
          {featuredJobsItems.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href='/#'>
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

                  <div className='flex flex-col p-4 border-t dark:border-slate-600'>
                    <h5 className='truncate capitalize block text-xl font-semibold'>
                      {item.jobTitle}
                    </h5>
                    <span className='truncate block text-slate-500 dark:text-slate-400'>
                      {item.companyName}
                    </span>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
