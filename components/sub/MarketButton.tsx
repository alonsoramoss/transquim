import React, { MouseEvent, useCallback, useState } from "react";

interface MarketButtonProps {
  children: React.ReactNode; 
  onClick?: () => void; 
}

const MarketButton: React.FC<MarketButtonProps> = ({ children, onClick }) => {
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
      className="relative inline-flex h-12 w-44 md:h-14 md:w-48 items-center justify-center rounded-xl bg-neutral-400 font-bold text-neutral-950"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
      }}>
      <div className="absolute -inset-0 -z-10 rounded-lg bg-gradient-to-b from-[#00e5ff] to-[#0077ff] opacity-85 blur"/>
      {children}
    </button>
  );
};

export default MarketButton;
