import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardVideo = ({ children }: Props) => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute -top-0.5 flex w-full justify-center'>
        <div className='left-0 h-[3px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-lime-600 to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex h-full items-center justify-center rounded-md border border-gray-800'>
        {children}
      </div>
    </div>
  );
};

export default CardVideo;
