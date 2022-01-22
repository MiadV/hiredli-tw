import React, { forwardRef } from 'react';
import { __DEV__ } from '@/utils/assertions';

export interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'solid', fullWidth = false, className, ...rest },
    ref
  ) => {
    let tempClassNames: string[] = [];

    const sharedClasses = [
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-indigo-400',
      'focus:ring-offset-2',
      'focus:ring-offset-indigo-50',
      'font-semibold',
      'h-10',
      'px-4',
      'rounded-full',
      'inline-flex',
      'flex-shrink-0',
      'items-center',
      'justify-center',
      'transition-colors',
      'ease-in-out',
      'duration-500',
    ];

    if (fullWidth) sharedClasses.push('w-full');

    let btnSolid = ['bg-indigo-600', 'hover:bg-indigo-700', 'text-white'];
    let btnOutline = [
      'bg-transparent',
      'hover:bg-indigo-50',
      'hover:text-indigo-700',
      'border',
      'border-indigo-600',
    ];
    let btnGhost = [
      'bg-transparent',
      'hover:bg-indigo-50',
      'hover:text-indigo-700',
    ];

    if (variant === 'solid') {
      tempClassNames = [...sharedClasses, ...btnSolid];
    } else if (variant === 'outline') {
      tempClassNames = [...sharedClasses, ...btnOutline];
    } else if (variant === 'ghost') {
      tempClassNames = [...sharedClasses, ...btnGhost];
    }

    let classes = tempClassNames.join(' ');
    return (
      <button {...rest} className={`${classes} ${className}`} ref={ref}>
        {children}
      </button>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'Button';
}

export interface LinkButtonProps {
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, className, isExternal = false, ...rest }, ref) => {
    const sharedClasses = [
      'bg-transparent',
      'hover:bg-indigo-50',
      'hover:text-indigo-700',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-indigo-400',
      'focus:ring-offset-2',
      'focus:ring-offset-indigo-50',
      'font-semibold',
      'rounded-full',
      'inline-flex',
      'flex-shrink-0',
      'items-center',
      'justify-center',
      'h-10',
      'px-4',
      'transition-colors',
      'ease-in-out',
      'duration-500',
    ];

    let classes = sharedClasses.join(' ');
    return (
      <a
        className={`${classes} ${className}`}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

if (__DEV__) {
  LinkButton.displayName = 'LinkButton';
}
