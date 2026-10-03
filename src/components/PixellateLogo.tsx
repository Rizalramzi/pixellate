import React from 'react';

interface PixellateLogoProps {
  variant?: 'color' | 'white' | 'dark';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animateOnHover?: boolean;
}

export const PixellateMark: React.FC<{
  color?: string;
  className?: string;
  size?: number;
}> = ({ color = '#0068FF', className = '', size = 38 }) => {
  // 7 radiating pixel blocks mirroring the Pixellate sunburst brand mark
  const angles = [-75, -50, -25, 0, 25, 50, 75];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${className}`}
      aria-label="Pixellate Logo Mark"
    >
      <g transform="translate(50, 36)">
        {angles.map((angle, idx) => (
          <rect
            key={idx}
            x="-4.8"
            y="17"
            width="9.6"
            height="27"
            rx="1.5"
            fill={color}
            transform={`rotate(${angle})`}
            className="transition-all duration-300 origin-[0_0] hover:opacity-85"
            style={{
              transformOrigin: '0px 0px',
            }}
          />
        ))}
      </g>
    </svg>
  );
};

export const PixellateLogo: React.FC<PixellateLogoProps> = ({
  variant = 'color',
  showText = true,
  size = 'md',
  className = '',
}) => {
  const isWhite = variant === 'white';
  const markColor = isWhite ? '#FFFFFF' : '#0068FF';
  const textColor = isWhite
    ? 'text-white'
    : variant === 'dark'
    ? 'text-white'
    : 'text-slate-900 dark:text-white';

  const sizeMap = {
    sm: { markSize: 28, textClass: 'text-lg', subClass: 'text-[9px]' },
    md: { markSize: 36, textClass: 'text-xl', subClass: 'text-[10px]' },
    lg: { markSize: 48, textClass: 'text-2xl', subClass: 'text-xs' },
    xl: { markSize: 64, textClass: 'text-3xl', subClass: 'text-sm' },
  };

  const { markSize, textClass, subClass } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        <PixellateMark color={markColor} size={markSize} />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-['Righteous'] tracking-tight ${textClass} ${textColor} transition-colors`}
            style={{ letterSpacing: '-0.02em' }}
          >
            Pixellate
          </span>
          <span
            className={`font-medium tracking-wider uppercase opacity-75 ${subClass} ${
              isWhite ? 'text-blue-100' : 'text-[#0068FF]'
            } mt-0.5`}
          >
            by PixelNoid
          </span>
        </div>
      )}
    </div>
  );
};

export default PixellateLogo;
