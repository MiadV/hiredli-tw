import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { ThemeToggle } from './ThemeToggle';

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
    <header className="bg-white dark:bg-slate-900/75 shadow-lg p-4 flex justify-between items-center">
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
          <a href="#">Companies</a>
          <button>Jobs</button>
        </div>
      </div>
      <div className="flex justify-end basis-1/3 gap-2 relative">
        <ThemeToggle />
        {/* <button className="hidden md:block">For Employers</button> */}
        <Button variant="outline" className="hidden md:block">
          For Employers
        </Button>
        <Button className="hidden md:block">Sign In</Button>
        <Button variant="ghost" className="hidden md:block">
          Sign In
        </Button>
      </div>
    </header>
  );
};
