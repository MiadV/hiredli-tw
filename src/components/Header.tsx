import Image from 'next/image';
import React from 'react';

const MenuPopOver = () => {
  return (
    <button
      type="button"
      className="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
    >
      <span className="sr-only">Navigation Menu</span>

      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export const Header = () => {
  return (
    <header className="bg-white shadow-lg p-4 flex justify-between items-center">
      <div className="basis-1/3 grow-0  xl:hidden">
        <MenuPopOver />
      </div>
      <div className="flex justify-center xl:justify-start basis-1/3 grow-0 shrink-0">
        <div className="block w-[140px] h-auto xl:ml-0">
          <Image
            src="/img/hiredly-logo.png"
            alt="logo"
            width={958}
            height={136}
          />
        </div>
        <div className="hidden xl:block">
          <button>Companies</button>
          <button>Jobs</button>
        </div>
      </div>
      <div className="flex justify-end basis-1/3">
        <button className="hidden md:block">For Employers</button>
        <button>Sign In</button>
      </div>
    </header>
  );
};
