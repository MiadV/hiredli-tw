import React from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';

// Import Swiper React components
import { FreeMode, Mousewheel, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const featuredJobs = [
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

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="mt-16">
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
    <section id="featured-jobs">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Featured Jobs</h2>
        <Button variant="outline" className="hidden xs:inline-flex">
          Show All
        </Button>
      </div>
      <div className="mb-6 featured-jobs__categories">
        <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction="horizontal"
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true }}
          slidesPerView={'auto'}
          spaceBetween={8}
          id="featured-jobs__categories__slider"
          className="!py-4"
        >
          <SwiperSlide className="!w-auto">
            <Chip label="all" active />
          </SwiperSlide>
          {featuredJobs.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chip label={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div id="featured-jobs__items">
        <Swiper spaceBetween={16} slidesPerView={2}>
          <SwiperSlide>
            <Link href="/#">
              <a className="block bg-white dark:bg-slate-700 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-all duration-150 shadow-md hover:shadow-lg">
                <div className="relative block pt-[70%]  overflow-hidden">
                  <Image
                    src="/img/a0.jpg"
                    alt="company"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="flex flex-col p-4">
                  <h5 className="truncate capitalize block text-xl font-semibold text-">
                    Business Development Engineer
                  </h5>
                  <span className="truncate block text-slate-500 dark:text-slate-400">
                    Company Name
                  </span>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
