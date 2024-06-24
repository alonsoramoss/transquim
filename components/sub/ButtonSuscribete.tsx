import React, { MouseEvent, useCallback, useState } from 'react';

interface ButtonSuscribeteProps {
  children: React.ReactNode; 
  onClick?: () => void; 
}

const ButtonSuscribete: React.FC<ButtonSuscribeteProps> = ({ children, onClick }) => {
  const [scale, setScale] = useState(1);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setScale(0.95);
    },
    []
  );

  const onMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    setScale(1);
  };

  return (
    <button
      className='relative inline-flex h-12 w-full items-center justify-center rounded-xl bg-white font-bold text-gray-950 '
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
      }}
    >
      <div className='absolute -inset-0 -z-10 rounded-lg bg-gradient-to-b from-[#22ff00] to-[#00ff84] opacity-85 blur' />
      {children}
    </button>
  );
};

export default ButtonSuscribete;
