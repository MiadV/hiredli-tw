import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, IconButton } from './Button';
import { Transition } from '@headlessui/react';

const Hero = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <div className="relative bg-red-500/20 w-full h-[640px] sm:h-[55vh] md:h-[440px]">
        <Image
          src="/img/corporate.jpg"
          alt="corporate"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-neutral-900/70">
          <div className="max-w-screen-lg mx-auto">
            <div className="min-h-[60px] m-6">
              <HeroInnerBanner
                show={showBanner}
                onClose={() => setShowBanner(false)}
              />
            </div>
            <div className="flex flex-col items-center text-center mx-4 mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white">
                discover your future
              </h1>
              <span className="mt-6 text-xl sm:text-2xl text-white">
                find your next job
              </span>

              <div className="mt-8">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroBottomCard />
    </>
  );
};

export default Hero;

const HeroInnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative py-3 px-8 rounded md:rounded-full text-white text-center shadow-lg bg-gradient-to-r from-purple-500 to-indigo-800">
        <p>
          Welcome to <span className="font-bold">HIREDLY</span>. An easier and
          faster job discovery platform.
        </p>
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>
      </div>
    </Transition>
  );
};

const items = ['graphic designer', 'software developer', 'architecture'];

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      if (!isDirty) {
        let value = items[index >= items.length ? (index = 0) : index];
        setQuery(value);
      }
      index++;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [setQuery, isDirty]);

  return (
    <form
      className="group"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div
        id="form-control"
        className="flex items-center bg-white rounded-full shadow-md group-focus-within:ring-2 group-focus-within:ring-indigo-400 group-focus-within:ring-offset-2 group-focus-within:ring-offset-transparent overflow-hidden"
      >
        <span className="block px-2 pointer-events-none text-slate-400 group-focus-within:text-indigo-800">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          className="appearance-none p-2 w-full text-xl leading-6 text-slate-900 placeholder-slate-400 border-transparent focus:border-transparent focus:ring-0"
          type="text"
          aria-label="Search input"
          placeholder="Job Title..."
          onClick={() => {
            if (!isDirty) {
              setIsDirty(true);
              setQuery('');
            }
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="hidden sm:block shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold h-11 px-2 transition-colors ease-in-out duration-500"
        >
          Discover Now
        </button>
      </div>
      <Button size="lg" type="submit" className="mt-8 sm:hidden">
        Discover Now
      </Button>
    </form>
  );
};

function HeroBottomCard() {
  return (
    <div className="bg-neutral-900 p-4">
      <span className="block text-lg text-white text-center">
        No time to look for jobs? Drop your resume with{' '}
        <span className="text-2xl font-black tracking-widest align-middle text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500">
          HIREDLY-X
        </span>{' '}
        headhunters here.
      </span>
    </div>
  );
}
