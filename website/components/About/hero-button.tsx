import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'red';
  children: React.ReactNode;
  withFindMore?: boolean;
}

export function HeroButton({ 
  variant = 'white', 
  children, 
  withFindMore = false,
  ...props 
}: HeroButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const baseStyles = "px-6 py-3 rounded-full flex items-center gap-2 group transition-colors duration-200 relative overflow-hidden";
  const variantStyles = {
    white: "bg-white text-black",
    red: "bg-red-600 text-white w-full md:w-auto"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-between w-full">
        {withFindMore ? (
          <>
            <span>{children}</span>
            <span className="flex items-center gap-2 ml-auto">
              Find out more
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </>
        ) : (
          <>
            <span>{children}</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </>
        )}
      </div>
      {isHovered && (
        <div 
          className="absolute inset-0 bg-black"
          style={{
            clipPath: `circle(25% at ${mousePosition.x}px ${mousePosition.y}px)`,
            transition: 'clip-path 0.2s ease-out',
          }}
        />
      )}
    </button>
  );
}

