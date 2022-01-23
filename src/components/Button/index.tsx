import React, { Component, forwardRef } from 'react';
import { __DEV__ } from '@/utils/assertions';

/* === Button Element === */

export interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  as?: string;
  isExternal?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'solid',
      fullWidth = false,
      className,
      as = 'button',
      isExternal = false,
      ...rest
    },
    ref
  ) => {
    let tempClassNames: string[] = [];

    const sharedClasses = [
      'capitalize',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-indigo-400',
      'focus:ring-offset-2',
      'focus:ring-offset-indigo-50',
      'font-semibold',
      'h-10',
      'px-3',
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

    let Element = as ? (
      React.createElement(
        as,
        {
          className: `${classes} ${className}`,
          target: isExternal ? '_blank' : undefined,
          rel: isExternal ? 'noopener noreferrer' : undefined,
          ref,
          ...rest,
        },
        children
      )
    ) : (
      <button {...rest} className={`${classes} ${className}`} ref={ref}>
        {children}
      </button>
    );

    return Element;
  }
);

if (__DEV__) {
  Button.displayName = 'Button';
}

/* === IconButton Element === */

export interface IconButtonProps extends ButtonProps {
  icon?: React.ReactElement;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, icon, className, 'aria-label': ariaLabel, ...rest }, ref) => {
    const sharedClasses = ['rounded-full', '!px-0', 'w-10'];

    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
        })
      : null;

    let classes = sharedClasses.join(' ');
    return (
      <Button
        className={`${classes} ${className}`}
        aria-label={ariaLabel}
        {...rest}
        ref={ref}
      >
        {_children}
      </Button>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = 'IconButton';
}
