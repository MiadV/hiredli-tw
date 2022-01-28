import React from 'react';
import clsx from 'clsx';

export interface ChipProps {
  label: string;
  className?: string;
  active?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  className,
  active,
  ...rest
}) => {
  return (
    <span
      className={clsx(
        'capitalize inline-flex justify-center items-center hover:dark:text-indigo-700 py-1.5 px-3 rounded-full text-sm cursor-pointer border border-slate-400 transition-colors ease-in-out duration-500',
        className,
        [
          active
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'hover:bg-slate-200',
        ]
      )}
      {...rest}
    >
      {label}
    </span>
  );
};
