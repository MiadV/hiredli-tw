import Image from 'next/image';
import React from 'react';

const Hero = () => {
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
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold  text-white sm:text-4xl">
              <span className="block">Want to be millionaire ?</span>
              <span className="block text-indigo-500">
                It&#x27;s today or never.
              </span>
            </h2>
            <p className="text-xl mt-4 max-w-md mx-auto text-white">
              I had noticed that both in the very poor and very rich extremes of
              society the mad were often allowed to mingle freely
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 p-4">
        <span className="block text-lg text-white text-center">
          No time to look for jobs? Drop your resume with{' '}
          <span className="text-2xl font-black tracking-widest align-middle text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500">
            HIREDLY-X
          </span>{' '}
          headhunters here.
        </span>
      </div>
    </>
  );
};

export default Hero;
