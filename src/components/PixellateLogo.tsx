import React from 'react';

export interface PixellateLogoProps {
  variant?: 'color' | 'white' | 'dark';
  color?: string;
  textColor?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  markOnly?: boolean;
}

/**
 * Authentic Pixellate Mark:
 * 7 radiating geometric pixel bars sweeping dynamically upwards and around
 * a smooth circular inner hub (Matahari Terbit & Pixel Code), matching the official logo.svg.
 */
export const PixellateMark: React.FC<{
  color?: string;
  className?: string;
  size?: number;
}> = ({ color = '#0068FF', className = '', size = 38 }) => {
  // Exact 7 asymmetric angles matching logo.svg: 4 on the left/up-left, 1 straight up, 2 on the right
  const angles = [-100, -75, -50, -25, 0, 25, 50];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Pixellate Brand Mark"
    >
      <g transform="translate(54, 70)">
        {/* Seamless Inner Hub Ring connecting all 7 rays around the sunrise arc */}
        <path
          d="M -16.74 2.95 A 17 17 0 0 1 13.02 -10.93 L 19.92 -16.71 A 26 26 0 0 0 -25.60 4.51 Z"
          fill={color}
        />

        {/* 7 Radiating Rectangular Pixel Rays */}
        {angles.map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <rect
              x="-3.6"
              y="-48"
              width="7.2"
              height="25"
              rx="1.4"
              fill={color}
            />
          </g>
        ))}
      </g>
    </svg>
  );
};

export const PixellateLogo: React.FC<PixellateLogoProps> = ({
  variant = 'color',
  color,
  textColor,
  showText = true,
  size = 'md',
  className = '',
  markOnly = false,
}) => {
  // Determine primary color based on variant or explicit override
  const primaryColor =
    color ||
    (variant === 'white'
      ? '#FFFFFF'
      : variant === 'dark'
      ? '#0068FF'
      : '#0068FF');

  const resolvedTextColor =
    textColor ||
    (variant === 'white'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-white'
      : 'text-[#0068FF] dark:text-white');

  const sizeMap = {
    sm: { markSize: 28, textClass: 'text-lg', gapClass: 'gap-2.5' },
    md: { markSize: 36, textClass: 'text-2xl', gapClass: 'gap-3' },
    lg: { markSize: 48, textClass: 'text-3xl', gapClass: 'gap-3.5' },
    xl: { markSize: 62, textClass: 'text-4xl', gapClass: 'gap-4' },
  };

  const { markSize, textClass, gapClass } = sizeMap[size];

  if (markOnly || !showText) {
    return <PixellateMark color={primaryColor} size={markSize} className={className} />;
  }

  return (
    <div className={`inline-flex items-center ${gapClass} select-none ${className}`}>
      <PixellateMark color={primaryColor} size={markSize} />

      <span
        className={`font-['Poppins'] font-bold tracking-tight ${textClass} ${resolvedTextColor} transition-colors leading-none`}
        style={{ letterSpacing: '-0.025em' }}
      >
        Pixellate
      </span>
    </div>
  );
};

export default PixellateLogo;
