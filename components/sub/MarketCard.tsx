import React, { MouseEvent, useCallback } from "react";
import Image from "next/image";

interface MarketCardProps {
  width?: string; 
  height?: string; 
  src: string; 
  alt: string; 
  LinkMarket: string; 
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const MarketCard: React.FC<MarketCardProps> = ({ width, height, src, alt, LinkMarket }) => {
  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 250;
      const rotateY = (centerX - x) / 250;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, 100),
    []
  );

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className={`relative h-${height} w-${width} overflow-hidden rounded-2xl border border-neutral-400 dark:border-neutral-800 p-[3px] backdrop-blur-3xl`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}>
      <a href={LinkMarket} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        <span className="absolute inset-[-50%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4912a1_0%,#0000ff_50%,#0b1260_100%)]"/>
        <div className="relative h-full w-full items-center justify-center rounded-xl">
          <Image src={src} alt={alt} width={2000} height={955} className="rounded-xl pointer-events-none"/>
        </div>
      </a>
    </div>
  );
};

export default MarketCard;
