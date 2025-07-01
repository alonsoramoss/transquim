import React, { MouseEvent, useCallback, useState } from "react"

interface MarketButtonProps {
  href?: string;
  children: React.ReactNode;
}

const MarketButton: React.FC<MarketButtonProps> = ({ href, children }) => {
  const [scale, setScale] = useState(1);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      setScale(0.95);
    },
    []
  );

  const onMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    setScale(1);
  };

  return (
    <a
      className="relative inline-flex h-12 w-44 md:h-14 md:w-48 items-center justify-center rounded-xl bg-neutral-400 font-bold text-neutral-950"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
      }}>
      <span className="absolute -inset-0 -z-10 rounded-lg bg-gradient-to-b from-[#00e5ff] to-[#0077ff] opacity-85 blur"/>
      {children}
    </a>
  );
};

export default MarketButton;
