import clsx from 'clsx';
import React from 'react';

export default function Logo() {
  return (
    <span
      className={clsx(
        'text-3xl font-black tracking-widest align-middle text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800'
      )}
    >
      HIREDLi
    </span>
  );
}
